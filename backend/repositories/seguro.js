const Seguro = require('../models/seguroMedico');

const findAllSeguro = (queries) =>{
    return Seguro.findAll(queries);
};

const updateSeguro = async (seguro, idSeguro) => {
    const newSeguro = await Seguro.findById(idSeguro);
    const resSeguro = await newSeguro.update(seguro);
    return resSeguro;
};

const createSeguro = async (seguro) =>{
    const newSeguro = new PaqueteViaje(seguro);
    return newSeguro;
};

const findSeguro = async(idSeguro) =>{
    const seguro = findById(idSeguro);
    return seguro;
};

const deleteSeguro = (idSeguro) =>{
    const seguro = await PaqueteViaje.findByIdAndDelete(idSeguro);
    return seguro;
};

module.exports = {
    findAllSeguro,
    updateSeguro,
    createSeguro,
    findSeguro,
    deleteSeguro
}