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
    //console.log("Se guardo",req.body)
    const evento = createEvento(req.body);
    
    await evento.save(function(err,suc){
        if(err){
            console.log(err)
        }
        res.status(201).json({
            ok:true,
            msg:'registro Evento creado',
            id:suc._id
        })
    })
}

const actualizarEvento = async(req,res=response)=>{
    const evento = updateEvento(req.body,req.params.eventoId);
    await evento.save(function(err){
        if (err) {
            console.log(err)
        }
        res.status(201).json({
            ok:true,
            msg:'Evento actualizado',
        })
    })
};

const eliminarEvento = async(req,res=response)=>{
    const evento = deleteEvento(req.params._id);
    await evento.save(function(err){
        if (err) {
            console.log(err);
        }
        res.status.json({
            ok:true,
            msg:'Evento eliminado'
        })
    })
};

const getAllEvento = async(req,res=response)=>{
    const eventos = getAllEventos(req.body);
    res.json({
        eventos
    })
};

const getEvento = async(req,res=response)=>{
    const evento = getEventoById(req.params._id);
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