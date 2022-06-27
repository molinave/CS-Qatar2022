const Estadia = require('../models/Estadia');

const createEstadia = async(estadia) =>{
    const resEstadia = new Estadia(estadia);
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
}

module.exports = {
    createEstadia,
    updateEstadia,
    deleteEstadia, 
};

