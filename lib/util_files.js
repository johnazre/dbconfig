const fs = require('fs');
const shared_files = require('./scaffolds/shared.scaffold');
const knex_files = require('./scaffolds/knexjs.scaffold');
const pathsFile = require('./paths')

module.exports = {
  gitignore: `node_modules/\nnpm-debug.log`,
  generateScaffold: function (router, dirname) {
    this.generateFolders(dirname, pathsFile)
    // fs.mkdirSync(`./${dirname}`);
    // console.log("\x1b[36m", `Created ./${dirname}`);
    //
    // fs.mkdirSync(`./${dirname}/db`);
    // console.log("\x1b[36m", `Created ./${dirname}/db`);
    // fs.writeFileSync(`./${dirname}/db/knex.js`, knex_files.knexInit);
    // console.log("\x1b[36m", `Created ./${dirname}/db/knex.js`);
    //
    // fs.mkdirSync(`./${dirname}/views`);
    // console.log("\x1b[36m", `Created ./${dirname}/views`);
    // fs.writeFileSync(`./${dirname}/views/index.ejs`, shared_files.indexView);
    // console.log("\x1b[36m", `Created ./${dirname}/views/index.ejs`);
    // fs.writeFileSync(`${dirname}/knexfile.js`, knex_files.knexfile);
    // console.log("\x1b[36m", `Created ./knexfile.js`);
    // fs.writeFileSync(`${dirname}/package.json`, shared_files.packagejson);
    // console.log("\x1b[36m", `Created ./package.json`);
    // fs.writeFileSync(`${dirname}/.gitignore`, this.gitignore);
    // console.log("\x1b[36m", `Created ./.gitignore`);
    // fs.writeFileSync(`${dirname}/README.md`, knex_files.knexReadme);
    // console.log("\x1b[36m", `Created ./README.md`);

    if(router) {
      fs.writeFileSync(`${dirname}/server.js`, shared_files.serverNoRoutes);
      console.log("\x1b[36m", `Created ./server.js`);
      fs.mkdirSync(`./${dirname}/routes`);
      console.log("\x1b[36m", `Created ./${dirname}/routes`);
      fs.writeFileSync(`./${dirname}/routes/indexRoutes.js`, shared_files.indexRoutes);
      console.log("\x1b[36m", `Created ./${dirname}/routes/indexRoutes.js`);
      fs.writeFileSync(`./${dirname}/routes/todosRoutes.js`, shared_files.todosRoutes);
      console.log("\x1b[36m", `Created ./${dirname}/routes/todosRoutes.js`);
      fs.writeFileSync(`./${dirname}/views/index.ejs`, shared_files.indexView);
      console.log("\x1b[36m", `Created ./${dirname}/views/index.ejs`);
    } else {
      fs.writeFileSync(`${dirname}/server.js`, shared_files.server);
      console.log("\x1b[36m", `Created ./server.js`);
    }
  },
  generateFolders: function(dirname, paths) {
    paths.folder_urls.forEach(url => {
      console.log(`./${dirname}/${url}`)
      // fs.mkdirSync(`./${dirname}/${url}`);
    })
  }

};
