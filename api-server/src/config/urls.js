const BASE_URL = "/api/v1";
const USERS = `${BASE_URL}/users`;
const POSTS = `${BASE_URL}/posts`;
const COMMENTS = `${BASE_URL}/comments`;
const LIKES = `${BASE_URL}/likes`;

module.exports = {
  base: BASE_URL,
  login: `${BASE_URL}/login`,
  register: `${BASE_URL}/register`,
  users: USERS,
  posts: POSTS,
  comments: COMMENTS,
  likes: LIKES,
};
