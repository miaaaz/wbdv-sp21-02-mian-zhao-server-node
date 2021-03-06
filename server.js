var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
require('dotenv').config()
const mongo_uri = process.env.MONGO_URI


const mongoose = require('mongoose');
mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 4000)