# DBConfig
A command line tool to help you get your node database tools up and running!

## Currently works with:
 - KnexJS

## Installation:
```
npm install -g dbconfig
```

## Usage
```
dbconfig knex [ type ] [ options ]
```
### Type:
 - scaffold: Will create knexfile.js, server.js, .gitignore, and package.json<br><br>
 Example usage: `dbconfig knex scaffold --dbname=someDBName --create-dir=newapp`<br><br>
 - simple: Will only create knexfile.js
 ex: dbconfig knex simple
 <br><br>
 Example usage: `dbconfig knex simple --dbname=someDBName`<br><br>

### Options:
 --dbname            Replace "dbname" with the database you will be using, otherwise it will default to the database name "postgres"<br><br>
 Example usage: `dbconfig knex scaffold --dbname=someDBName`<br><br>

 --create-dir        Will create directory and put all of the files inside of that directory. Defaults to "new-app".<br><br>
 Example usage: `dbconfig knex scaffold --create-dir=someProjectName`<br><br>

 --router            Will move the routes from the server.js file into a "routes" directory.<br><br>
 Example usage: `dbconfig knex simple --create-dir=someDirName --router`<br><br>

## Getting Started

- To put the necessary files into an existing project:
```
dbconfig knex simple --dbname=someDBName
```
- To create a new project with all necessary files to get started:
```
dbconfig knex scaffold --dbname=someDBName --create-dir=someProjectName
```

## Contributions
This project is open source and pull requests are welcome!

## Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to our GitHub Repository. Even better, you can submit a Pull Request with a fix.

## Want a Feature?
You can *request* a new feature by submitting an issue to our GitHub
Repository. If you would like to *implement* a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it.

## License
MIT
