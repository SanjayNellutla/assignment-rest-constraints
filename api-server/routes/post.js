const express = require('express');
const { successResponse, errorResponse } = require("../helpers");
const { Post } = require('../models');
// const userController = require('../controllers/user');

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================

// router.get('/', userController.getPaginated);

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

// router.post('/register', userController.register);


module.exports = router;
