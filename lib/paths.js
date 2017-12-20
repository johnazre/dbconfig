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
  { path: `README.md`, template: knexTemplates.knexReadme},
]

let routes_urls = [
  { path: `server.js`, template: sharedTemplates.serverNoRoutes },
  { path: `routes/indexRoutes.js`, template: sharedTemplates.indexRoutes},
  { path: `routes/todosRoutes.js`, template: sharedTemplates.todosRoutes}
]

// if(router) {
//   fs.writeFileSync(`${dirname}/server.js`, shared_files.serverNoRoutes);
//   console.log("\x1b[36m", `Created ./server.js`);
//   fs.mkdirSync(`./${dirname}/routes`);
//   console.log("\x1b[36m", `Created ./${dirname}/routes`);
//   fs.writeFileSync(`./${dirname}/routes/indexRoutes.js`, shared_files.indexRoutes);
//   console.log("\x1b[36m", `Created ./${dirname}/routes/indexRoutes.js`);
//   fs.writeFileSync(`./${dirname}/routes/todosRoutes.js`, shared_files.todosRoutes);
//   console.log("\x1b[36m", `Created ./${dirname}/routes/todosRoutes.js`);
//   fs.writeFileSync(`./${dirname}/views/index.ejs`, shared_files.indexView);
//   console.log("\x1b[36m", `Created ./${dirname}/views/index.ejs`);
// } else {
//   fs.writeFileSync(`${dirname}/server.js`, shared_files.server);
//   console.log("\x1b[36m", `Created ./server.js`);
// }

module.exports = {
  folder_urls,
  knex_urls,
  shared_urls,
  routes_urls
}
