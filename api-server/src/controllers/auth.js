const jwt = require("jsonwebtoken");
const userService = require('../services/auth');
const userValidations = require("../validations/user");
const { successResponse, errorResponse } = require("../helpers");
const { compareHash } = require("../helpers/hash");
const config = require("../config/config");

 const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const payload = {
      email,
      firstName,
      lastName,
      password,
    };

    const user = await userService.createUser(payload);
    return successResponse(req, res, { user });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

 const login = async (req, res) => {
  try {
    await userValidations.validateLoginRequest(req.body);
    const user = await userService.getUserByEmail(req.body.email);
    if (user && user.id) {
      console.log(user.get('password'));
      const isAuthenticated = await compareHash(req.body.password, user.password);
      if (isAuthenticated) {
        const token = jwt.sign(
          { user },
          config.jwtSecret,
        );
        res.send({ user, token, redirect: '/posts' });
      } else {
        throw new Error('Wrong Credentials');
      }
    } else {
      throw new Error('User Not found');
    }
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

module.exports = {
  register,
  login,
}


