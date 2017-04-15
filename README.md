# DBConfig
A command line tool to help you get your node database tools up and running!

#### Currently works with:
 - KnexJS

### Installation:
```
npm install -g dbconfig
```

### Usage
```
dbconfig knex [ type ] [ options ]
```
#### Type:
 - scaffold: Will create knexfile.js, server.js, .gitignore, and package.json<br><br>
 Example usage: `dbconfig knex scaffold --dbname=someDBName --create-dir=newapp`<br><br>
 - simple: Will only create knexfile.js
 ex: dbconfig knex simple
 <br><br>
 Example usage: `dbconfig knex simple --dbname=someDBName`<br><br>

#### Options:
 --dbname            Replace "dbname" with the database you will be using, otherwise it will default to the database name "postgres"
 ex: dbconfig knex scaffold --dbname=someDBName

 --create-dir        Will create directory and put all of the files inside of that directory. Defaults to "new-app".
 ex: dbconfig knex simple --create-dir=someDirName

### Getting Started

- To put the necessary files into an existing project:
```
dbconfig knex simple --dbname=someDBName
```
- To create a new project with all necessary files to get started:
```
dbconfig knex scaffold --dbname=someDBName --create-dir=whateverProjectNameYouWant
```
