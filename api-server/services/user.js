const  { User, Post }  = require("../models");

// console.log(db.User);

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

const createUser = async (payload) => {
  return await User.create(payload);
};

const getUserByEmail = async (email) => {
  const data = await User.findOne({ where: { email } });
  return data;
}

module.exports = {
  getPaginatedUsers,
  createUser,
  getUserByEmail
};