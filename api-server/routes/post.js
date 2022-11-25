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
    const posts = await Post.findAll();
    successResponse(req,res, posts);
  } catch (error) {
    errorResponse(req,res, error.message);
  }
});

module.exports = router;
