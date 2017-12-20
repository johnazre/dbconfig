// var dbname = require('../flag_functions').findFlagValue(process.argv, '--dbname');
let dbname = require('../../dbconfig').dbname
var objfile = `const Knex = require('knex');
const objection = require('objection');
const Model = objection.Model;

var knexConfig = Knex({
  client: 'pg',
  useNullAsDefault: true,
  connection: "postgres://localhost/${dbname}"
})


Model.knex(knexConfig);

// Initialize knex connection.
module.exports = knexConfig;
`;

var server = `var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const objection = require('objection');
const Model = objection.Model;
Model.knex(require('./objfile'));

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

module.exports = {
  objfile,
  server
};
