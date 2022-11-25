require('dotenv').config({ path: '.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const router = require('./routes');
const config = require('./config/config');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', router.users);
app.use('/posts', router.posts);
app.use('/comments', router.comments);
app.use('/likes', router.likes);

app.listen(config.port, () => {
  console.log(`Web server listening to: ${config.port}`);
  sequelize
  .authenticate().then(() => {
    console.log(`Successfully connected to: ${config.host}`);
  }).catch(error =>{
    console.log(error);
  }) 
});