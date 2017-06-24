'use strict'

const expect = require('chai').expect;
let findFlagValue = require('../lib/util_files').findFlagValue;

describe('util_files', () => {
    it('should export a function called findFlagValue', () => {
        expect(findFlagValue).to.be.a('function')
    })
})

describe('findFlagValue', () => {
    it('should export a function', () => {
        var flag = findFlagValue([ 
            '/usr/local/bin/node', 
            '/Users/someone/Desktop/dbconfig/dbconfig.js',
            'knex', 
            'scaffold',
            '--create-dir=hello' 
        ], '--create-dir');
        expect(flag).to.equal('hello');
    })
})