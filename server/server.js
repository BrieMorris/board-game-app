const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//reference solo project to build out passport and routes


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- MIDDLEWARE ---------- **/
const { rejectUnauthenticated } = require("./modules/authentication-middleware"); //may not need this 

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});