// console.log(require('../util_files'))
// var directoryName = require('../util_files').findFlagValue(process.argv, '--create-dir') || 'new-app';

var server = `var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index', { title: 'DBConfig' });
})

app.get('/todos', function(req, res) {
  res.send('get-all route')
})

app.get('/todos/:id', function(req, res) {
  res.send('get-one route')
})

app.post('/todos', function(req, res) {
  res.send('add-one route')
})

app.put('/todos/:id', function(req, res) {
  res.send('change/update-one route')
})

app.delete('/todos/:id', function(req, res) {
  res.send('delete/remove-one route')
})



app.listen(port, function() {
console.log("listening on port: ", port);
})
`;

var serverNoRoutes = `var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var index = require('./routes/indexRoutes');
var todos = require('./routes/todosRoutes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/todos', todos);

app.listen(port, function() {
console.log("listening on port: ", port);
})
`;

var indexRoutes = `var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
`;

var todosRoutes = `var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from todos').then(function(todos) {
    res.send(todos.rows);
  });
});

module.exports = router;
`;

var packagejson = `{
  "name": "blah",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "body-parser": "^1.18.2",
    "cookie-parser": "^1.4.3",
    "cors": "^2.8.4",
    "debug": "^3.1.0",
    "ejs": "^2.5.7",
    "express": "^4.16.2",
    "knex": "^0.13.0",
    "morgan": "^1.9.0",
    "pg": "^7.3.0"
  }
}
`;

var indexView = `
  <h1><%= title %> is working!</h1>
`;

module.exports ={
  server,
  serverNoRoutes,
  todosRoutes,
  indexRoutes,
  packagejson,
  indexView
};
