const authRouter = require('./auth')
const userRouter = require('./user');
const postsRouter = require('./post');
const likesRouter = require('./like');
const commentsRouter = require('./comment');

module.exports = {
  auth: authRouter,
  users: userRouter,
  posts: postsRouter,
  likes: likesRouter,
  comments: commentsRouter,
};