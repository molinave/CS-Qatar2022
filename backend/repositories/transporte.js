const { findById, findByIdAndDelete } = require('../models/Transporte');
const Transporte = require('../models/Transporte');

const createTransporte = (transporte) =>{
    const newTransporte = await new Transporte(transporte);
    return newTransporte;
};

const updateTransporte = async (transporte,idTransporte) =>{
    const resTransporte = await Transporte.findById(idTransporte);
    const newTransporte = await resTransporte.update(transporte);
    return newTransporte;
};

const findAllTransporte = async(queries) =>{
    return Transporte.findAll(queries);
};

const findTranporte = async(idTranporte) =>{
    const resTransporte = findById(idTranporte);
    return resTransporte;
};

const deleteTransporte = async(idTransporte) =>{
    const resTransporte = findByIdAndDelete(idTransporte);
    return resTransporte;
};

module.exports = {
    createTransporte,
    updateTransporte,
    findAllTransporte,
    findTranporte,
    deleteTransporte
};
