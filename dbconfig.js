#!/usr/bin/env node
"use strict";

const fs = require('fs');
const knex_files = require('./lib/scaffolds/knexjs.scaffold');
const help_data = require('./lib/help_blurb.js');
const util_files = require('./lib/util_files.js');

const directoryName = util_files.findFlagValue(process.argv, '--create-dir') || 'new-app';

console.log(directoryName);

if(!process.argv[2] || process.argv.includes('--help')) {
  console.log("\x1b[36m", help_data.help)
} else {
  if(process.argv[2].toLowerCase() === 'knex') {
    if(process.argv[3].toLowerCase() === 'scaffold') {
      fs.mkdirSync(`./${directoryName}`)
      fs.writeFileSync(`${directoryName}/knexfile.js`, knex_files.knexfile);
      console.log("\x1b[36m", `Created ./knexfile.js`)
      fs.writeFileSync(`${directoryName}/server.js`, knex_files.server);
      console.log("\x1b[36m", `Created ./server.js`)
      fs.writeFileSync(`${directoryName}/package.json`, knex_files.packagejson);
      console.log("\x1b[36m", `Created ./package.json`)
      fs.writeFileSync(`${directoryName}/.gitignore`, util_files.gitignore);
      console.log("\x1b[36m", `Created ./.gitignore`)
    } else if(process.argv[3].toLowerCase() === `simple`) {
      fs.writeFileSync(`${directoryName}/knexfile.js`, knex_files.knexfile);
      console.log("\x1b[36m", "\x1b[36m", 'Created ./knexfile.js')
    }
  }
}
