const User = require('../models/user');
const UserRepository = require('../repository/userRepository');
const userRepo = new UserRepository();

module.exports = {
    getUsers: (req, res) => {
        let user = userRepo.getAllUsers();
        console.log(user);
        res.json(user);
    },
    getUserById: (req, res) => {
        console.log("with params", req.params);
        let user = userRepo.getUserById(req.params.userId);
        console.log(user);
        res.send(user);
    },
    saveUser: (req, res) => {
        console.log(req.body);
        res.send('ok');
    }
}