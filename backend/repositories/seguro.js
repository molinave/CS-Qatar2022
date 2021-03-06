const Seguro = require('../models/seguroMedico');

const findAllSeguro = async(queries) =>{
    const seguro = await Seguro.find(queries);
    return seguro;
};

const updateSeguro = async (seguro, idSeguro) => {
    const newSeguro = await Seguro.findByIdAndUpdate(idSeguro,{$set:seguro},{new:true});
    return newSeguro;
};

const createSeguro = async (seguro) =>{
    const newSeguro = await new Seguro(seguro);
    await newSeguro.save();
    return newSeguro;
};

const findSeguro = async(idSeguro) =>{
    const seguro = await Seguro.findById(idSeguro);
    return seguro;
};

const deleteSeguro = async(idSeguro) =>{
    const seguro = await Seguro.findByIdAndDelete(idSeguro);
    return seguro;
};

module.exports = {
    findAllSeguro,
    updateSeguro,
    createSeguro,
    findSeguro,
    deleteSeguro
};