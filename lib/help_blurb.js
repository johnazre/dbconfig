module.exports = {
  help: `How to use dbconfig:
  command: dbconfig knex [ type ][ options ]

   TYPE:
    - scaffold: Will create knexfile.js, server.js, .gitignore, and package.json
    - simple: Will only create knexfile.js
    ex: dbconfig knex simple

   OPTIONS:
    --dbname            Replace "dbname" with the database you will be using, otherwise it will default to the database name "postgres"
    ex: dbconfig knex scaffold --dbname=someDBName

    --create-dir        Will create directory and put all of the files inside of that directory. Defaults to "new-app".
    ex: dbconfig knex simple --create-dir=someDirName
  `
}
