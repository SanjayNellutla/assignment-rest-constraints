const express = require('express');
const userController = require('../controllers/auth');
const { successResponse } = require('../helpers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    links: {
      login: {
        method: "POST",
        url: "/login"
      },
      register: {
        method: "POST",
        url: "/register"
      },
      posts: {
        method: "GET",
        url: "/posts",
      }
    }
  });
});

router.post('/login', userController.login);

router.post('/register', userController.register);


module.exports = router;
