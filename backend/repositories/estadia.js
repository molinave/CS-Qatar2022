const Estadia = require('../models/Estadia');

const createEstadia = (estadia) =>{
    const resEstadia = new Estadia(estadia);
    return resEstadia;
};

const updateEstadia = (estadia, estadiaId) =>{
    const resEstadia = Estadia.findByIdAndUpdate(estadiaId,{$set:estadia},{new:true});
    return resEstadia;
};

const deleteEstadia = (estadiaId) =>{
    const resEstadia = Estadia.findByIdAndDelete(estadiaId);
    return resEstadia;
}

module.exports = {
    createEstadia,
    updateEstadia,
    deleteEstadia, 
};

