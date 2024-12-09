const express = require("express");
const app = express();
const port = 5000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');



app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
  name: 'todolist',
  secret: 'blahsomething',
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: (1000 * 60 * 100)
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// Use express router
app.use('/', require('./routes/index'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server in running on the port: ${port}`);
});
