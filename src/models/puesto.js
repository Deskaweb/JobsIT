const moongose = require('mongoose');
const { Schema } = moongose;
const path = require('path');

const PuestoSchema = new Schema ({
    title: { type: String },
    description: { type: String },
    filename: { type: String },
    empresa: { type: String },
    horario: { type: String },
    salario: { type: String },
    ubicacion: { type: String },
    postulaciones: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now }
});

PuestoSchema.virtual('uniqueId')
    .get(function (){
        return this.filename.replace(path.extname(this.filename), '')
    });

module.exports = moongose.model('Puesto', PuestoSchema);
