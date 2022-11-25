const userRouter = require('./user');
const postsRouter = require('./post');
const postsRouter = require('./post');
const postsRouter = require('./post');

module.exports = {
  users: userRouter,
  posts: postsRouter,
  likes: likesRouter,
  comments: commentsRouter,
};