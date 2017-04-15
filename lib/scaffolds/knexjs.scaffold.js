var dbname = require('../util_files').findFlagValue(process.argv, '--dbname');

var server = `var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var knex = require('./knexfile');
var cors = require('cors');
var logger = require('morgan');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

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

`

var knexfile = `var options = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/${dbname}',
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);
`

var packagejson = `{
  "name": "objapp",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.17.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.3",
    "express": "~4.15.2",
    "ejs": "~2.5.6",
    "knex": "^0.12.9",
    "morgan": "~1.8.1",
    "objection": "^0.7.12",
    "pg": "^6.1.5",
    "serve-favicon": "~2.4.2"
  }
}
`


module.exports ={
  server,
  knexfile,
  packagejson
}
