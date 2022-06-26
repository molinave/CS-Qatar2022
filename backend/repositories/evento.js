const Evento = require('../models/Evento');

const createEvento = async(evento)=>{
    const resEvento = new Evento(evento);
    return resEvento;
};

const updateEvento = async(evento,eventoId)=>{
    const newEvento = await Evento.findById(eventoId);
    const resEvento = await newEvento.update(evento);
    return resEvento; 
};

const deleteEvento = async(eventoId)=>{
    const resEvento = await Evento.findByIdAndDelete(eventoId);
    return resEvento;
};

const getEventoById = async(eventoId)=>{
    const resEvento = await Evento.findById(eventoId);
    return resEvento;
};

const getAllEventos = async(queries)=>{
    const resEvento = await Evento.findAll(queries);
    return resEvento;
};

module.exports = {
    createEvento,
    updateEvento,
    deleteEvento,
    getEventoById,
    getAllEventos
};