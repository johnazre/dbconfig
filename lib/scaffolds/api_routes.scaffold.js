let routes = entity => {
  return `const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('${entity}').select().orderBy('id', 'asc').then(${entity} => res.json(${entity}))
});

router.get('/:id', function (req, res) {
  knex('${entity}').select().where('id', req.params.id).then(${entity} => res.json(${entity}))
});

router.post('/', function (req, res) {
  knex('${entity}')
    .insert(req.body, '*')
    .then(new${entity} => res.json(new${entity}));
});

router.patch('/:id', function (req, res) {
  knex('${entity}')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updated${entity} => res.json(updated${entity}));
});

router.delete('/:id', function (req, res) {
  knex('${entity}')
    .del()
    .where('id', req.params.id)
    .then(removed${entity} => removed${entity});
});

module.exports = router;`;
};

module.exports = routes;
