const { getEvento } = require('../controllers/evento');
const { getTransporteById } = require('../controllers/transporte');
const Paquete = require('../models/Paquete');
const { getEstadiaId } = require('./estadia');
const { findSeguro } = require('./seguro');

const findAllPaquete = (queries) =>{
    const paquete = await Paquete.find(queries);
    return paquete;
};

const updatePaquete = async (paquete, idPaquete) => {
    const resPaquete = await Paquete.findByIdAndUpdate(idPaquete,{$set:paquete},{new:true});
    return resPaquete;
};

const createPaquete = async (paquete) =>{
    const newPaquete = await new Paquete(paquete);
    const eventos = paquete.eventos;
    eventos.forEach(eventoId => {
        const evento = await getEvento(eventoId);
        //guardar informacion en paquete
    });
    const estadia = await getEstadiaId(paquete.estadia);
    //guardo informacion estadia
    const transporte = await getTransporteById(paquete.transporte);
    //guardo info de seguro
    const seguro = await findSeguro(paquete.seguro);
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

const detelePaquete = (paqueteId) =>{
    const paquete = await Paquete.findByIdAndDelete(paqueteId);
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