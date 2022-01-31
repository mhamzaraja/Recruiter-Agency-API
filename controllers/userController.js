const User = require('../models/user');
const UserRepository = require('../repository/userRepository');
const userRepo = new UserRepository();

module.exports = {
    getUsers: (req, res) => {
        console.log(req.user);
        let user = userRepo.getAllUsers();
        console.log(user);
        res.json(user);
    },
    getUserById: (req, res) => {
        console.log("with params", req.params.userId);
        let user = userRepo.getUserById(req.params.userId);
        console.log(user);
        res.json(user);
    },
    saveUser: (req, res) => {
        console.log(req.body);
        res.send('ok');
    }
}