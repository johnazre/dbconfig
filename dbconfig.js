#!/usr/bin/env node
'use strict'

// Questions packages and files
const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')

const help_data = require('./lib/help_blurb')
const builders = require('./lib/builders')

if (process.argv.includes('--help')) {
  console.log('\x1b[36m', help_data.help)
} else {
  inquirer.prompt(questions).then(answers => {
    builders(answers)
  })
}
