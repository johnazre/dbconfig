let server = `const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const app = express();

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

const serverNoRoutes = `const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const index = require('./routes/indexRoutes');
const todos = require('./routes/todosRoutes');

const app = express();

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

const indexRoutes = `const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
`;

const todosRoutes = `const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from todos').then(function(todos) {
    res.send(todos.rows);
  });
});

module.exports = router;
`;

const packagejson = `{
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

const indexView = `
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
