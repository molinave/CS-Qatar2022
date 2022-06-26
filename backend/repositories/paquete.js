const PaqueteViaje = require('../models/PaqueteVIaje');

const findAllPaquete = (queries) =>{
    return PaqueteViaje.findAll(queries);
};

const updatePaquete = async (paquete, idPaquete) => {
    const newPaquete = await PaqueteViaje.findById(idPaquete);
    const resPaquete = await newPaquete.update(paquete);
    return resPaquete;
};

const createPaquete = async (paquete) =>{
    const newPaquete = new PaqueteViaje(paquete);
    return newPaquete;
};

const findPaquete = async(idPaquete) =>{
    const paquete = findById(idPaquete);
    return paquete;
};

const UpdateState = async(idPaquete) =>{
    const paquete = await PaqueteViaje.findById(idPaquete);
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

const detelePaquete = (paqueteId) =>{
    const paquete = await PaqueteViaje.findByIdAndDelete(paqueteId);
    return paquete;
};

module.exports = {
    updatePaquete,
    UpdateState,
    createPaquete,
    findAllPaquete,
    findPaquete,
    detelePaquete
}