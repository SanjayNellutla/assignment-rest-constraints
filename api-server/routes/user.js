const express = require('express');
const { User, Post } = require("../models");
const { verifyAuthorization } = require('../helpers/jwt');

const getPaginatedUsers = async (page, limit) => {
  const users = await User.findAndCountAll({
    order: [
      ["createdAt", "DESC"]
    ],
    include: [{ model: Post }],
    offset: (page - 1) * limit,
    limit,
  });
  return users;
};

const getPaginated = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const size = req.params.size || 10;
    const users = await getPaginatedUsers(page, size);
    successResponse(req, res, { users, links: {
      posts: {
        method: "GET",
        url: "/posts",
      }
    } });
  } catch (error) {
    errorResponse(req, res, error.message);
  }
};

const router = express.Router();

router.get('/users', verifyAuthorization, getPaginated);


module.exports = router;
