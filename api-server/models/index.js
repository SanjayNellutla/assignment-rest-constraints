const Sequelize = require('sequelize');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');

const db = {};

let sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
);

db.User = User(sequelize, Sequelize.DataTypes);
db.Post = Post(sequelize, Sequelize.DataTypes);
db.Comment = Comment(sequelize, Sequelize.DataTypes);
db.Like = Like(sequelize, Sequelize.DataTypes);

db.User.hasMany(db.Post, { foreignKey: 'user_id' });
db.Post.belongsTo(db.User);

// sequelize.sync();

db.sequelize = sequelize;

module.exports = db;
