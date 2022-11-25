require('dotenv').config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  jwtSecret: process.env.JWT_SECRET,
  connectionPool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: 4000,
};
