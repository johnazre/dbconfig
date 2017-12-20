let answers = require('./dbconfig').answers
let util_files = require('./util_files')


function builder() {
  if(answers.library === 'knexjs') {
    if(answers.type === 'scaffold') {
      util_files.generateScaffold(router);
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
