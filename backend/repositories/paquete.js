const Paquete = require('../models/Paquete');


const findAllPaquete = (queries) =>{
    const paquete = await Paquete.find(queries);
    return paquete;
};

const actualizarPaquete = async (paquete, idPaquete) => {
    const resPaquete = await Paquete.findByIdAndUpdate(idPaquete,{$set:paquete},{new:true});
    return resPaquete;
};

const newPaquete = async (paquete) =>{
    const newPaquete = await new Paquete(paquete);
    await newPaquete.save();
    return newPaquete;
};

const findPaquete = async(idPaquete) =>{
    const paquete = await findById(idPaquete);
    return paquete;
};

const UpdateState = async(idPaquete) =>{
    const paquete = await Paquete.findById(idPaquete);
    if (paquete.estado = 'Reservado'){
        paquete.estado = 'Disponible';
    }else{
        if (paquete.estado = 'Disponible'){
            paquete.estado = 'Reservado';
        };
    };
    await paquete.save();
    return paquete;
};

const eliminarPaquete = (paqueteId) =>{
    const paquete = await Paquete.findByIdAndDelete(paqueteId);
    return paquete;
};

module.exports = {
    actualizarPaquete,
    UpdateState,
    newPaquete,
    findAllPaquete,
    findPaquete,
    eliminarPaquete
};