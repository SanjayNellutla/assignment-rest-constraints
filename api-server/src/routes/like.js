const express = require('express');
const { successResponse, errorResponse } = require("../helpers");
const { Like } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const payload = req.body;
    const post = await Like.create(payload);
    successResponse(req,res, {
      post,
    });
  } catch (error) {
    errorResponse(req,res, error.message);
  }
});


module.exports = router;
