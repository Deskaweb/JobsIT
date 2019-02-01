const ctrl = {};

const { Puesto } = require('../models/index');

ctrl.index = async (req, res) => {
    const puestos = await Puesto.find().sort({ timestamp: -1 });
    res.render('index', { puestos });
};

module.exports = ctrl;