const knexfile = function(dbname) {
  return `let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/${dbname}' : 'postgres://localhost/${dbname}'
  
  module.exports = {
    development: {
        client: 'pg',
        connection: connectionString,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  `;
};

const knexInit = `const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
`;

module.exports = {
  knexfile,
  knexInit
};
