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

app.listen(port, function() {
  console.log("listening on port: ", port);
});
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

const packagejson = function(projName) {
  return `{
    "name": "${projName}",
    "version": "0.0.0",
    "private": true,
    "scripts": {
      "start": "node server.js"
    },
    "dependencies": {
      "body-parser": "^1.19.0",
      "cookie-parser": "^1.4.4",
      "cors": "^2.8.5",
      "debug": "^4.1.1",
      "ejs": "^2.7.1",
      "express": "^4.17.1",
      "knex": "^0.19.5",
      "morgan": "^1.9.1",
      "pg": "^7.12.1"
    }
  }
  `
};

const indexView = `<h1><%= title %> is working!</h1>`;

const gitignore = `node_modules/\n.DS_Store\n`;

module.exports ={
  server,
  serverNoRoutes,
  todosRoutes,
  indexRoutes,
  packagejson,
  indexView,
  gitignore
};
