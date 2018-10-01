let questions = [
  {
    type: 'input',
    name: 'dir_name',
    message: 'Project Name:',
    default: function() {
      return 'new-app'
    }
  },
  {
    type: 'list',
    name: 'type',
    message: 'Database Type:',
    choices: ['Postgresql', 'MongoDB'],
    filter: function(val) {
      return val.toLowerCase()
    }
  },
  {
    type: 'input',
    name: 'dbname',
    message: 'Database Name:',
    default: function() {
      return 'false'
    }
  },
  // {
  //   type: 'list',
  //   name: 'library',
  //   message: 'Which ORM/DRM would you like to use?',
  //   choices: ['KnexJS (for Postgres)', 'Mongoose (for MongoDB)'],
  //   filter: function(val) {
  //     return val.toLowerCase()
  //   }
  // }
  // {
  //   type: 'input',
  //   name: 'api_files',
  //   message: 'Give a list of any entities you will have, separated by commas',
  //   choices: ['simple', 'scaffold'],
  //   filter: function(val) {
  //     return val.toLowerCase();
  //   }
  // },
  // {
  //   type: 'list',
  //   name: 'router',
  //   message: 'Routes located in:',
  //   choices: ['server.js', 'separate routes directory'],
  //   filter: function(val) {
  //     return val.includes('separate')
  //       ? true
  //       : false
  //   }
  // }
]

module.exports = questions
