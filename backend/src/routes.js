const express = require('express');

const Ongcontroller =require('./controllers/Ongcontroller');
const Incidentcontroller =require('./controllers/Incidentcontroller');
const Profilecontroller = require('./controllers/Profilecontroller');
const Sessioncontroller = require('./controllers/Sessioncontroller');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create);

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('/profile', Profilecontroller.index);

routes.get('/incidents', Incidentcontroller.index);
routes.post('/incidents', Incidentcontroller.create);
routes.delete('/incidents/:id', Incidentcontroller.delete);

module.exports = routes;

