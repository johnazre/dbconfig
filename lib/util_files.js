const fs = require('fs');
const shared_files = require('./scaffolds/shared.scaffold');
const knex_files = require('./scaffolds/knexjs.scaffold');

const directoryName = require('../dbconfig').dir_name

module.exports = {
  gitignore: `node_modules/\nnpm-debug.log`,
  generateScaffold: function (router) {
    fs.mkdirSync(`./${directoryName}`);
    console.log("\x1b[36m", `Created ./${directoryName}`);

    fs.mkdirSync(`./${directoryName}/db`);
    console.log("\x1b[36m", `Created ./${directoryName}/db`);
    fs.writeFileSync(`./${directoryName}/db/knex.js`, knex_files.knexInit);
    console.log("\x1b[36m", `Created ./${directoryName}/db/knex.js`);

    fs.mkdirSync(`./${directoryName}/views`);
    console.log("\x1b[36m", `Created ./${directoryName}/views`);
    fs.writeFileSync(`./${directoryName}/views/index.ejs`, shared_files.indexView);
    console.log("\x1b[36m", `Created ./${directoryName}/views/index.ejs`);
    fs.writeFileSync(`${directoryName}/knexfile.js`, knex_files.knexfile);
    console.log("\x1b[36m", `Created ./knexfile.js`);
    fs.writeFileSync(`${directoryName}/package.json`, shared_files.packagejson);
    console.log("\x1b[36m", `Created ./package.json`);
    fs.writeFileSync(`${directoryName}/.gitignore`, this.gitignore);
    console.log("\x1b[36m", `Created ./.gitignore`);
    fs.writeFileSync(`${directoryName}/README.md`, knex_files.knexReadme);
    console.log("\x1b[36m", `Created ./README.md`);

    if(router) {
      fs.writeFileSync(`${directoryName}/server.js`, shared_files.serverNoRoutes);
      console.log("\x1b[36m", `Created ./server.js`);
      fs.mkdirSync(`./${directoryName}/routes`);
      console.log("\x1b[36m", `Created ./${directoryName}/routes`);
      fs.writeFileSync(`./${directoryName}/routes/indexRoutes.js`, shared_files.indexRoutes);
      console.log("\x1b[36m", `Created ./${directoryName}/routes/indexRoutes.js`);
      fs.writeFileSync(`./${directoryName}/routes/todosRoutes.js`, shared_files.todosRoutes);
      console.log("\x1b[36m", `Created ./${directoryName}/routes/todosRoutes.js`);
      fs.writeFileSync(`./${directoryName}/views/index.ejs`, shared_files.indexView);
      console.log("\x1b[36m", `Created ./${directoryName}/views/index.ejs`);
    } else {
      fs.writeFileSync(`${directoryName}/server.js`, shared_files.server);
      console.log("\x1b[36m", `Created ./server.js`);
    }
  }

};
