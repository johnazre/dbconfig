const sharedTemplatesKnex = require('./scaffolds/shared.knex.scaffold')
const sharedTemplatesMongo = require('./scaffolds/shared.mongo.scaffold')
const knexTemplates = require('./scaffolds/knexjs.scaffold')

let folder_urls_knex = [``, `db`, `views`, `routes`]
let folder_urls_mongo = [``, `models`, `views`, `routes`]

let knex_urls = [
  { path: `db/knex.js`, template: knexTemplates.knexInit },
  { path: `knexfile.js`, template: knexTemplates.knexfile },
  { path: `package.json`, template: sharedTemplatesKnex.packagejson },
  { path: `routes/indexRoutes.js`, template: sharedTemplatesKnex.indexRoutes },
  { path: `routes/todosRoutes.js`, template: sharedTemplatesKnex.todosRoutes },
  { path: `server.js`, template: sharedTemplatesKnex.serverNoRoutes },
]

let mongo_urls = [
  { path: `models/Todo.js`, template: sharedTemplatesMongo.todoModel },
  { path: `package.json`, template: sharedTemplatesMongo.packagejson },
  { path: `routes/indexRoutes.js`, template: sharedTemplatesMongo.indexRoutes },
  { path: `routes/todosRoutes.js`, template: sharedTemplatesMongo.todosRoutes },
  { path: `server.js`, template: sharedTemplatesMongo.serverNoRoutes },
]

let shared_urls = [
  { path: `views/index.ejs`, template: sharedTemplatesKnex.indexView },
  { path: `.gitignore`, template: sharedTemplatesKnex.gitignore },
  { path: `README.md`, template: knexTemplates.knexReadme }
]

module.exports = {
  folder_urls_knex,
  folder_urls_mongo,
  knex_urls,
  mongo_urls,
  shared_urls
}
