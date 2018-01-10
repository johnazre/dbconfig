const sharedTemplates = require('./scaffolds/shared.scaffold')
const knexTemplates = require('./scaffolds/knexjs.scaffold')

let folder_urls = [``, `db`, `views`, `routes`]

let knex_urls = [
  { path: `db/knex.js`, template: knexTemplates.knexInit },
  { path: `knexfile.js`, template: knexTemplates.knexfile }
]

let shared_urls = [
  { path: `views/index.ejs`, template: sharedTemplates.indexView },
  { path: `package.json`, template: sharedTemplates.packagejson },
  { path: `.gitignore`, template: sharedTemplates.gitignore },
  { path: `README.md`, template: knexTemplates.knexReadme }
]

let routes_urls = [
  { path: `server.js`, template: sharedTemplates.serverNoRoutes },
  { path: `routes/indexRoutes.js`, template: sharedTemplates.indexRoutes },
  { path: `routes/todosRoutes.js`, template: sharedTemplates.todosRoutes }
]

module.exports = {
  folder_urls,
  knex_urls,
  shared_urls,
  routes_urls
}
