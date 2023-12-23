const express = require('express');
const router = express();
const {create, find, update, destroy} = require('./controller');
const {index} = require('./controller');

router.get('/categories', index);

router.post('/categories', create);

router.get('/categories/:id', find);

router.put('/categories/:id', update);

router.delete('/categories/:id', destroy);

module.exports = router;