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
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default: function() {
      return 'Doe';
    }
  }
];


module.exports = questions
