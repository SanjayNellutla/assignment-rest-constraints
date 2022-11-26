const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const router = require("./routes");
const config = require("./config/config");
const { verifyAuthorization } = require("./helpers/jwt");
const urls = require("./config/urls");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", router.auth);
app.use(urls.users, router.users);
app.use(urls.posts, verifyAuthorization, router.posts);
app.use(urls.comments, verifyAuthorization, router.comments);
app.use(urls.likes, verifyAuthorization, router.likes);

app.listen(config.port, () => {
  console.log(`Web server listening to: ${config.port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log(`Successfully connected to: ${config.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
});
