const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashText = (text) => {
  return bcrypt.hash(text, saltRounds);
};

const compareHash = (text, hash) => {
  return bcrypt.compare(text, hash);
};

module.exports = {
  hashText,
  compareHash,
};