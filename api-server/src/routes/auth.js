const express = require("express");
const urls = require("../config/urls");
const authController = require("../controllers/auth");

const router = express.Router();

router.get(urls.base, (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=31557600");
  res.send({
    links: [
      { key: "users", url: urls.users },
      { key: "posts", url: urls.posts },
    ],
    resources: {
      login: {
        method: "POST",
        url: urls.login,
      },
      register: {
        method: "POST",
        url: urls.register,
      },
    },
  });
});

router.post(urls.login, authController.login);

router.post(urls.register, authController.register);

module.exports = router;
