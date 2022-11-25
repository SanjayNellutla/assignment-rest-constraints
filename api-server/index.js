const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const cors = require('cors');
const { sequelize } = require('./models');
// const initSequelize = require('./config/sequelize');
const router = require('./routes');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', router.users);
app.use('/posts', router.posts);

sequelize
  .authenticate()
  .then(() => {
    app.listen(3000, () => {
      console.log('Web server listnening to: 3000');
      // initSequelize();
    });
  })
  .catch((err) => {
    // console.error('Unable to connect to the database:', err);
  });