require('./config/config');
require('./models/db');
require('./models/user.model');
require('./config/passportConfig');
const port = process.env.PORT || 3000

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const routes = require('./routes/index.router');


const application = express();

// middleware
application.use(bodyParser.json());
application.use(cors());
application.use(passport.initialize());
application.use('/api', routes);

application.listen(port), ()=>{
  console.log("Server started");
}; 