let questions = [
  {
    type: 'input',
    name: 'dir_name',
    message: "Project Name:",
    default: function() {
      return 'new-app';
    }
  },
  {
    type: 'list',
    name: 'type',
    message: 'Database Type:',
    choices: ['Postgresql'],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'input',
    name: 'dbname',
    message: "Database Name:",
    default: function() {
      return 'false';
    }
  },
  {
    type: 'list',
    name: 'library',
    message: 'Which ORM would you like to use?',
    choices: ['KnexJS'],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'list',
    name: 'type',
    message: 'simple (knexfile.js only) or scaffold (express app)?',
    choices: ['simple', 'scaffold'],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'list',
    name: 'router',
    message: 'Routes located in:',
    choices: ['server.js', 'separate routes directory'],
    filter: function(val) {
      return val.includes('separate')
        ? true
        : false
    }
  }
];


module.exports = questions
