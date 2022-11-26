const express = require("express");
const urls = require("../config/urls");
const { successResponse, errorResponse } = require("../helpers");
const { Post } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const post = await Post.create(payload);
    successResponse(req, res, {
      post,
    });
  } catch (error) {
    errorResponse(req, res, error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { userId: req.user.id } });
    res.send({
      data: posts,
      links: [
        { key: "users", url: urls.users },
        { key: "posts", url: urls.posts },
      ],
      resources: {
        comments: {
          method: "GET",
          url: urls.comments,
        },
        likes: {
          method: "GET",
          url: urls.likes,
        },
      },
    });
  } catch (error) {
    errorResponse(req, res, error.message);
  }
});

module.exports = router;
