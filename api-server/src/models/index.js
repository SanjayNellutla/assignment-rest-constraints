const Sequelize = require('sequelize');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');
const config = require("../config/config");

const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.dbPort,
    dialect: config.dialect,
    pool: config.connectionPool
  },
);

db.User = User(sequelize, Sequelize.DataTypes);
db.Post = Post(sequelize, Sequelize.DataTypes);
db.Comment = Comment(sequelize, Sequelize.DataTypes);
db.Like = Like(sequelize, Sequelize.DataTypes);

// Relationships
// User & Post
db.User.hasMany(db.Post, { foreignKey: 'user_id' });
db.Post.belongsTo(db.User);

// User & Like
db.User.hasMany(db.Like, { foreignKey: 'user_id' });
db.Like.belongsTo(db.User);

// User & Comment
db.User.hasMany(db.Comment, { foreignKey: 'user_id' });
db.Comment.belongsTo(db.User);

// Post & Comment
db.Post.hasMany(db.Comment, { foreignKey: 'user_id' });
db.Comment.belongsTo(db.Post);

// Post & Like
db.Post.hasMany(db.Like, { foreignKey: 'user_id' });
db.Like.belongsTo(db.Post);

// sequelize.sync();

db.sequelize = sequelize;

module.exports = db;
