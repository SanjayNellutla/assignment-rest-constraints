const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================

router.get('/', userController.getPaginated);

router.post('/login', userController.login);

router.post('/register', userController.register);


module.exports = router;
