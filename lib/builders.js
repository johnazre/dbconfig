const fs = require('fs')
const util_files = require('./util_files')

function builder(answers) {
  console.log('answers', answers)
  if(answers.library === 'knexjs') {
    util_files.generateScaffold(answers);
  }
}

module.exports = builder
