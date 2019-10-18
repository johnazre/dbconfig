const serverNoRoutes = dbname => `const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/${dbname}', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db is listening'));

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const index = require('./routes/indexRoutes');
const todos = require('./routes/todosRoutes');


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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
`;

const todoModel = `const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('todo', todoSchema)`

const todosRoutes = `const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo
    .find()
    .then(todos => res.json(todos))
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
      "mongoose": "^5.7.5",
      "morgan": "^1.9.1"
    }
  }
  `
};

const indexView = `<h1><%= title %> is working!</h1>`;

const gitignore = `node_modules/\n.DS_Store\n`;

module.exports ={
  // server,
  serverNoRoutes,
  todoModel,
  todosRoutes,
  indexRoutes,
  packagejson,
  indexView,
  gitignore
};
