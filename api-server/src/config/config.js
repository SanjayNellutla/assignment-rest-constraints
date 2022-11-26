require("dotenv").config();

module.exports = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "pp-local",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  connectionPool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  jwtSecret: process.env.JWT_SECRET || "sample",
  port: process.env.APP_PORT || 4000,
};
