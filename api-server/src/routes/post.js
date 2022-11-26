const express = require('express');
const { successResponse, errorResponse } = require("../helpers");
const { Post } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const payload = req.body;
    const post = await Post.create(payload);
    successResponse(req,res, {
      post,
    });
  } catch (error) {
    errorResponse(req,res, error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { userId: req.user.id } });
    res.send({
      data: posts,
      links: [{ key: "users", url: "/users" }, { key: "posts", url: "/posts" }],
      resources: {
        comments: {
          method: "GET",
          url: "/comments"
        },
        likes: {
          method: "GET",
          url: "/likes"
        }
      }
    });
  } catch (error) {
    errorResponse(req,res, error.message);
  }
});

module.exports = router;
