#!/usr/bin/env node
'use strict'

// Questions packages and files
const fs = require('fs')
const inquirer = require('inquirer')
const initQuestions = require('./lib/questions/init')
const fileGenQuestions  = require('./lib/questions/file-gen')

const help_data = require('./lib/help_blurb')
const builders = require('./lib/builders')

if (process.argv.includes('--help')) {
  console.log('\x1b[36m', help_data.help)
} else if(process.argv.includes('init')) {
  inquirer.prompt(initQuestions).then(answers => {
    builders(answers)
  })
} else if(process.argv.includes('new')) {
  require('./lib/questions/file-gen')
}
