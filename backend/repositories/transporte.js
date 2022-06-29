const Transporte = require('../models/Transporte');

const createTransporte = async(transporte) =>{
    const newTransporte = await new Transporte(transporte);
    await newTransporte.save()
    return newTransporte;
};

const updateTransporte = async (transporte,idTransporte) =>{
    const newTransporte = await Transporte.findByIdAndUpdate(idTransporte,{$set:transporte},{new:true});
    return newTransporte;
};

const findAllTransporte = async(queries) =>{
    const response = await Transporte.find(queries);
    return response;
};

const findTranporte = async(idTranporte) =>{
    const resTransporte = await Transporte.findById(idTranporte);
    return resTransporte;
};

const deleteTransporte = async(idTransporte) =>{
    const resTransporte = await Transporte.findByIdAndDelete(idTransporte);
    return resTransporte;
};

module.exports = {
    createTransporte,
    updateTransporte,
    findAllTransporte,
    findTranporte,
    deleteTransporte
};
