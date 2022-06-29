const Evento = require('../models/Evento');

const createEvento = async(evento)=>{
    const resEvento = await new Evento(evento);
    await resEvento.save()
    return resEvento;
};

const updateEvento = async(evento,eventoId)=>{
    const resEvento = await Evento.findByIdAndUpdate(eventoId,{$set:evento},{new:true});
    //await resEvento.save()
    return resEvento; 
};

const deleteEvento = async(eventoId)=>{
    const resEvento = await Evento.findByIdAndDelete(eventoId);
    return resEvento;
};

const getEventoById = async(eventoId)=>{
    const resEvento = await Evento.findById(eventoId);
    //console.log(resEvento);
    //console.log(eventoId)
    return resEvento;
};

const getAllEventos = async(query)=>{
    const resEvento = await Evento.find(query);
    return resEvento;
};

module.exports = {
    createEvento,
    updateEvento,
    deleteEvento,
    getEventoById,
    getAllEventos
};