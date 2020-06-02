const express = require('express');

const userscontroller = require('./controllers/userscontroller');
const ordenscontroller = require('./controllers/ordenscontroller');
const sessioncontroller = require('./controllers/sessioncontroller');


const routes = express.Router();

routes.post('/sessions', sessioncontroller.create);

routes.get('/users', userscontroller.index);
routes.post('/users', userscontroller.create);

routes.get('/ordens', ordenscontroller.index);
routes.post('/ordens', ordenscontroller.create);

  module.exports = routes;
