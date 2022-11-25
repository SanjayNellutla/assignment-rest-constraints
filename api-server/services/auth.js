const  { User }  = require("../models");

const createUser = async (payload) => {
  return await User.create(payload);
};

const getUserByEmail = async (email) => {
  const data = await User.findOne({ where: { email } });
  return data;
}

module.exports = {
  createUser,
  getUserByEmail
};