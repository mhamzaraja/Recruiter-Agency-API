const ErrorResposnse = require('../utils/errorResposnse');
const UserRepository = require('../repository/userRepository');
const authConstants = require('../constants/authConstants');
const jwt = require('jsonwebtoken');
const userRepo = new UserRepository();

module.exports = {
    login: (req, res, next) => {
        // recieve username and password in req.body
        const { email, password} = req.body;
        if(!email || !password){
            return next(new ErrorResposnse("Email and Password are required!", 400)); 
        }

        //get user by email
        let user = userRepo.getUserByEmail(email);
        if(!user){
            return next(new ErrorResposnse("Invalid Credentials!", 401));
        }

        //match password
        if(password != user.password){
            return next(new ErrorResposnse("Invalid Credentials!", 401));
        }

        //generate auth token
        let token = jwt.sign({email: user.email}, authConstants.jwtKey, {
            expiresIn: '1h'
        });

        //reply back with token
        res.json({
            success: true,
            token
        })
    }
};