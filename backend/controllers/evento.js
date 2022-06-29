const {response}=require('express');
//const Evento = require('../models/Evento');
const {
    createEvento,
    updateEvento,
    deleteEvento,
    getAllEventos,
    getEventoById
} = require('../repositories/evento')

const crearEvento = async(req,res=response)=>{
    try {
        const evento = req.body;
        const response = await createEvento(evento);
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const actualizarEvento = async(req,res=response)=>{
    try {
        const evento = req.body;
        const response = await updateEvento(evento,req.params.eventoId);
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const eliminarEvento = async(req,res=response)=>{
    try {
        const response = await deleteEvento(req.params.eventoId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message)
    };
};

const getAllEvento = async(req,res=response)=>{
    const eventos = await getAllEventos();
    res.json({
        eventos
    })
};

const getEvento = async(req,res=response)=>{
    const eventoId = req.params.eventoId;
    const evento = await getEventoById(eventoId);
    console.log(eventoId);
    res.json({
        evento
    })
};

module.exports ={
    crearEvento,
    actualizarEvento,
    getEvento,
    getAllEvento,
    eliminarEvento
};