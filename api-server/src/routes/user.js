const express = require("express");
const { User, Post } = require("../models");
const { errorResponse } = require("../helpers");
const { verifyAuthorization } = require("../helpers/jwt");
const urls = require("../config/urls");

const getPaginatedUsers = async (page, limit) => {
  const users = await User.findAndCountAll({
    order: [["createdAt", "DESC"]],
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
    res.send({
      data: users,
      links: [
        { key: "users", url: urls.users },
        { key: "posts", url: urls.posts },
      ],
    });
  } catch (error) {
    errorResponse(req, res, error.message);
  }
};

const router = express.Router();

router.get("/", verifyAuthorization, getPaginated);

module.exports = router;
