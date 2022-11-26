const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
      .email()
      .min(3)
      .max(30)
      .required(),
  password: Joi.string().required(),
});

const validateLoginRequest = (payload) => {
  return loginSchema.validate(payload);
}

module.exports = {
  validateLoginRequest,
}