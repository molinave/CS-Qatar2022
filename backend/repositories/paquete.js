const Paquete = require('../models/Paquete');


const findAllPaquete = async(queries) =>{
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
    const estado = paquete.estado;//.toLowwerCase();
    //console.log('estoy en repositories');
    //console.log(estado);
    if (estado == 'reservado'){
        paquete.estado = 'disponible';
    }else{
        if (estado == 'disponible'){
            paquete.estado = 'reservado';
        };
    };
    console.log(paquete)
    await paquete.save();
    return paquete;
};

const eliminarPaquete = async(paqueteId) =>{
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