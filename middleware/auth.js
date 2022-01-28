const authConstants = require('../constants/authConstants');
const ErrorResponse = require('../utils/errorResposnse');
const UserRepository = require('../repository/userRepository');
const userRepo = new UserRepository();

const jwt = require('jsonwebtoken');

module.exports = {
    authenticate : (req, res, next) => {
        let token;

        //check if header has a token
        if(req.headers.authorization && req.headers.authorization.startswith('Bearer')) {
            //extract token fom header
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token){
            return next(new ErrorResponse("Unauthorized Request!", 401));
        }

        //verify token
        try{
            const decode = jwt.verify(token, authConstants.jwtKey);
            //get user by email
            req.user = userRepo.getUserByEmail(decode.email);
        }catch(ex){
            return next(new ErrorResponse("Unauthorized Request!", 401));
        }
        //call next
        next();
    },
    authorize: (...roles) => {
        return (req, res, next) => {
            if(!roles.includes(req.user.role)){
                return next(new ErrorResponse(('Not authorized for this route!', 403)));
            }
            next();
        }
    }
};