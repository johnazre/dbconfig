#!/usr/bin/env node
"use strict";

const fs = require('fs');

const knex_files = require('./lib/scaffolds/knexjs.scaffold');
const obj_files = require('./lib/scaffolds/objectionjs.scaffold')

const shared_files = require('./lib/scaffolds/shared.scaffold');
const help_data = require('./lib/help_blurb.js');
const util_files = require('./lib/util_files.js');

const directoryName = util_files.findFlagValue(process.argv, '--create-dir') || 'new-app';


if(!process.argv[2] || process.argv.includes('--help')) {
  console.log("\x1b[36m", help_data.help)
} else {
  if(process.argv[2].toLowerCase() === 'knex') {
    if(process.argv[3].toLowerCase() === 'scaffold') {
      fs.mkdirSync(`./${directoryName}`)
      console.log("\x1b[36m", `Created ./${directoryName}`)

      fs.mkdirSync(`./${directoryName}/db`)
      console.log("\x1b[36m", `Created ./${directoryName}/db`)
      fs.writeFileSync(`./${directoryName}/db/knex.js`, knex_files.knexInit);
      console.log("\x1b[36m", `Created ./${directoryName}/db/knex.js`)

      fs.mkdirSync(`./${directoryName}/views`);
      console.log("\x1b[36m", `Created ./${directoryName}/views`)
      fs.writeFileSync(`./${directoryName}/views/index.ejs`, shared_files.indexView);
      console.log("\x1b[36m", `Created ./${directoryName}/views/index.ejs`)
      fs.writeFileSync(`${directoryName}/knexfile.js`, knex_files.knexfile);
      console.log("\x1b[36m", `Created ./knexfile.js`)
      fs.writeFileSync(`${directoryName}/server.js`, shared_files.server);
      console.log("\x1b[36m", `Created ./server.js`)
      fs.writeFileSync(`${directoryName}/package.json`, shared_files.packagejson);
      console.log("\x1b[36m", `Created ./package.json`)
      fs.writeFileSync(`${directoryName}/.gitignore`, util_files.gitignore);
      console.log("\x1b[36m", `Created ./.gitignore`)
      fs.writeFileSync(`${directoryName}/README.md`, knex_files.knexReadme);
      console.log("\x1b[36m", `Created ./README.md`)
    } else if(process.argv[3].toLowerCase() === `simple`) {
      fs.writeFileSync(`./knexfile.js`, knex_files.knexfile);
      console.log("\x1b[36m", "\x1b[36m", 'Created ./knexfile.js')
      fs.mkdirSync(`./db`)
      console.log("\x1b[36m", `Created ./db`)
      fs.writeFileSync(`./db/knex.js`, knex_files.knexInit);
      console.log("\x1b[36m", `Created ./db/knex.js`)
    }
  }
  if(process.argv[2].toLowerCase() === 'objectionjs') {
    if(process.argv[3].toLowerCase() === 'scaffold') {
      fs.mkdirSync(`./${directoryName}`)
      console.log("\x1b[36m", `Created ./${directoryName}`)
      fs.mkdirSync(`./${directoryName}/views`);
      console.log("\x1b[36m", `Created ./${directoryName}/views`)
      fs.writeFileSync(`./${directoryName}/views/index.ejs`, shared_files.indexView);
      console.log("\x1b[36m", `Created ./${directoryName}/views/index.ejs`)
      fs.writeFileSync(`${directoryName}/objfile.js`, obj_files.objfile);
      console.log("\x1b[36m", `Created ./objfile.js`)
      fs.writeFileSync(`${directoryName}/server.js`, obj_files.server);
      console.log("\x1b[36m", `Created ./server.js`)
      fs.writeFileSync(`${directoryName}/package.json`, shared_files.packagejson);
      console.log("\x1b[36m", `Created ./package.json`)
      fs.writeFileSync(`${directoryName}/.gitignore`, util_files.gitignore);
      console.log("\x1b[36m", `Created ./.gitignore`)
      fs.writeFileSync(`${directoryName}/README.md`, knex_files.knexReadme);
      console.log("\x1b[36m", `Created ./README.md`)
    } else if(process.argv[3].toLowerCase() === `simple`) {
      fs.writeFileSync(`./objfile.js`, obj_files.objfile);
      console.log("\x1b[36m", "\x1b[36m", 'Created ./objfile.js')
    }
  }
}
