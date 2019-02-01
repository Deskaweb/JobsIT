const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra'); 

const { Puesto } = require('../models/index');

const ctrl = {};

ctrl.index = async (req, res) => {
 puesto = await Puesto.findOne({filename: {$regex: req.params.puesto_id}});
 console.log(puesto);
  res.render('puesto', {puesto});
};

ctrl.create = (req, res) => {
    const savePuesto = async () => {
      const imgUrl = randomNumber();
      const puestos = await Puesto.find({ filename: imgUrl });
      if (puestos.length > 0) {
        savePuesto()
      } else {
        // Puesto Location
        const puestoTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
  
        // Validate Extension
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
          // you wil need the public/temp path or this will throw an error
          await fs.rename(puestoTempPath, targetPath);
          const newPuesto = new Puesto({
            title: req.body.title,
            filename: imgUrl + ext,
            description: req.body.description,
            empresa: req.body.empresa,
            horario: req.body.horario,
            salario: req.body.salario,
            ubicacion: req.body.ubicacion
          });
          const puestoSaved = await newPuesto.save();
          // res.send('Funciona');
          res.redirect('/puestos/' + puestoSaved.uniqueId);
        } else {
          await fs.unlink(puestoTempPath);
          res.status(500).json({ error: 'Only Images are allowed' });
        }
      }
    };
  
    savePuesto();
  };

ctrl.like = (req, res) => {
    
};

ctrl.comment = (req, res) => {
    
};

ctrl.remove = (req, res) => {
    
};

module.exports = ctrl;