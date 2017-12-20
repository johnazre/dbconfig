const fs = require('fs')
const util_files = require('./util_files')

function builder(answers) {
  console.log('answers', answers)
  if(answers.library === 'knexjs') {
    if(answers.type === 'scaffold') {
      let router = answers.router === 'separate' ? false : true
      util_files.generateScaffold(router, answers.dir_name);
    } else {
      fs.writeFileSync(`./knexfile.js`, knex_files.knexfile);
      console.log("\x1b[36m", "\x1b[36m", 'Created ./knexfile.js');
      fs.mkdirSync(`./db`);
      console.log("\x1b[36m", `Created ./db`);
      fs.writeFileSync(`./db/knex.js`, knex_files.knexInit);
      console.log("\x1b[36m", `Created ./db/knex.js`);
    }
  }
}

module.exports = builder
