const fs = require('fs');
const shared_files = require('./scaffolds/shared.scaffold');
const knex_files = require('./scaffolds/knexjs.scaffold');
const pathsFile = require('./paths')

module.exports = {
  gitignore: `node_modules/\nnpm-debug.log`,
  generateScaffold: function (answers) {
    this.generateFolders(answers.dir_name, pathsFile, answers.router)
    this.generateFiles(answers, pathsFile)
  },
  generateFolders: function(dirname, paths, router) {
    paths.folder_urls.forEach(url => {
      console.log(`./${dirname}/${url}`)
      fs.mkdirSync(`./${dirname}/${url}`);
    })
    if (router) fs.mkdirSync(`./${dirname}/routes`);
  },
  generateFiles: function(answers, paths, library) {
    paths.shared_urls.forEach(file => {
      if(file.path === 'package.json'){
        console.log(`./${answers.dir_name}/${file.path}`)
        fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template(answers.dir_name));
      } else {
        console.log(`./${answers.dir_name}/${file.path}`)
        fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template);
      }
    })
    paths.routes_urls.forEach(file => {
      console.log(`./${answers.dir_name}/${file.path}`)
      fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template);
    })
    if(answers.library === 'knexjs'){
      paths.knex_urls.forEach(file => {
        if(file.path === 'knexfile.js'){
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template(answers.dbname));
        } else {
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template);
        }
      })
    }
  }

};
