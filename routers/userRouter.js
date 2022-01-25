const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUser);
router.get('/:userId', userController.getUserById);
router.post('/:userId', userController.saveUser);

module.exports = router;
