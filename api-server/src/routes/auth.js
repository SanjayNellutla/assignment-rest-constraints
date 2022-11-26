const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    links: [{ key: "users", url: "/users" }, { key: "posts", url: "/posts" }],
    resources: {
      login: {
        method: "POST",
        url: "/login"
      },
      register: {
        method: "POST",
        url: "/register"
      },
    }
  });
});

router.post('/login', authController.login);

router.post('/register', authController.register);

module.exports = router;
