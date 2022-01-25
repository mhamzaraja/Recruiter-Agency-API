const User = require('../models/user');
const UserRepository = require('../repository/userRepository');

module.exports = {
    getUser: (req, res) => {
        let user = new User(1, "test user", "test@test.com");
        const userRepository = new UserRepository();
        res.json(user);
    },
    getUserById: (req, res) => {
        console.log("with params", req.params);
        let user = new User(1, "test user", "test@test.com");
        res.send(user);
    },
    saveUser: (req, res) => {
        console.log(req.body);
        res.send('ok');
    }
}