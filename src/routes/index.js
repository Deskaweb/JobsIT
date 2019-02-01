const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const puesto = require('../controllers/puesto');
const add = require('../controllers/add');

module.exports = app => {

    router.get('/', home.index);
    router.get('/add', add.index);
    router.get('/puestos/:puesto_id', puesto.index);
    router.post('/puestos', puesto.create);
    router.post('/puestos/:puesto_id/like', puesto.like);
    router.post('/puestos/:puesto_id/comment', puesto.comment);
    router.delete('/puestos/:puesto_id', puesto.remove);


app.use(router);

    

};