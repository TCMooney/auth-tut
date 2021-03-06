const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const users = require('./routes/api/users');
const blog = require('./routes/api/post');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use('/api/users', users);
app.use('/api/blogs', blog);

const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`Listening on port ${port}`));
