const fs = require('fs')
const util_files = require('./util_files')

function builder(answers) {
  if(answers.type === 'postgresql') {
    util_files.generateScaffold(answers);
  } else if(answers.type === 'mongodb') {
    util_files.generateScaffold(answers);
  }
}

module.exports = builder
