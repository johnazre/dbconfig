const fs = require('fs');
const shared_files_knex = require('./scaffolds/shared.knex.scaffold');
const shared_files_mongo = require('./scaffolds/shared.mongo.scaffold');
const knex_files = require('./scaffolds/knexjs.scaffold');
const pathsFile = require('./paths')

module.exports = {
  gitignore: `node_modules/\nnpm-debug.log`,
  generateScaffold: function (answers) {
    this.generateFolders(answers.type, answers.dir_name, pathsFile, answers.router)
    this.generateFiles(answers, pathsFile)
  },
  generateFolders: function(type, dirname, paths, router) {
    if(type == 'mongodb') {
      paths.folder_urls_mongo.forEach(url => {
        console.log(`./${dirname}/${url}`)
        fs.mkdirSync(`./${dirname}/${url}`);
      })
    } else if(type == 'postgresql') {
      paths.folder_urls_knex.forEach(url => {
        console.log(`./${dirname}/${url}`)
        fs.mkdirSync(`./${dirname}/${url}`);
      })
    }
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
    // paths.routes_urls.forEach(file => {
    //   console.log(`./${answers.dir_name}/${file.path}`)
    //   fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template);
    // })
    if(answers.type === 'postgresql'){
      paths.knex_urls.forEach(file => {
        if(file.path === 'knexfile.js'){
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template(answers.dbname));
        } else if(file.path === 'package.json') {
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template(answers.dir_name));
        } else {
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template);
        }
      })
    } else if (answers.type == 'mongodb') {
      paths.mongo_urls.forEach(file => {
        if(file.path === 'server.js'){
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template(answers.dbname));
        } else if(file.path === 'package.json') {
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template(answers.dir_name));
        } else {
          console.log(`./${answers.dir_name}/${file.path}`)
          fs.writeFileSync(`./${answers.dir_name}/${file.path}`, file.template);
        }
      })
    }
  }

};
