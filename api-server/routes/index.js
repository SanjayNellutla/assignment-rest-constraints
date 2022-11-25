const userRouter = require('./user');
const postsRouter = require('./post');

module.exports = {
  users: userRouter,
  posts: postsRouter,
};