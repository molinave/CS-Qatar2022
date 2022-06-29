const Estadia = require('../models/Estadia');

const createEstadia = async(estadia) =>{
    const resEstadia = await new Estadia(estadia);
    await resEstadia.save();
    return resEstadia;
};

const updateEstadia = async(estadia, estadiaId) =>{
    const resEstadia = await Estadia.findByIdAndUpdate(estadiaId,{$set:estadia},{new:true});
    return resEstadia;
};

const deleteEstadia = async(estadiaId) =>{
    const resEstadia = await Estadia.findByIdAndDelete(estadiaId);
    return resEstadia;
};

const getAllEstadias = async(query)=>{
    const resEstadia = await Estadia.find(query);
    return resEstadia;
};

const getEstadiaId = async(estadiaId)=>{
    const resEstadia = await Estadia.findById(estadiaId);
    return resEstadia;
};

module.exports = {
    createEstadia,
    updateEstadia,
    deleteEstadia,
    getAllEstadias,
    getEstadiaId
};

