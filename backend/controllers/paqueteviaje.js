const {response}=require('express');
//const Evento = require('../models/Evento');
const {PaqueteViaje} = require('../models/PaqueteViaje');
const {Evento} = require('../models/Evento');
const {Transporte} = require('../models/Transporte');
const {Estadia} = require('../models/Estadia');
const {seguroMedico} = require('../models/seguroMedico');
//const PaqueteViaje = require('../models/PaqueteVIaje');

const crearPaqueteViaje = async(req,res=response)=>{
    const paqueteviaje = new PaqueteViaje(req.body);
    const listaEvento = paqueteevento.events;
    const estadia = paqueteevento.stay;
    const transporte = paqueteviaje.transport;
    const seguro = paqueteviaje.insurance;
    //genero y guardo los eventos del paquete

    listaEvento.forEach(event => {
        const newEvento = new Evento(event);
        newEvento.save();
        paqueteviaje.events.push(newEvento._id);
    });
    
    //genero y guardo la estadia del paquete
    const newEstadia = new Estadia(estadia);
    newEstadia.save();
    paqueteviaje.stay = newEstadia._id;
    //genero y guardo el transporte
    const newTransporte = new Transporte(transporte);
    newTransporte.save();
    paqueteviaje.stay = newEstadia._id;
    //genero y guardo el seguro medico
    const newSeguro = new seguroMedico(seguro);
    newSeguro.save();
    paqueteviaje.stay = newSeguro._id;
    //guardo paquete
    await paqueteevento.save(function(err,suc){
        if(err){
            console.log(err)
        }
        res.status(201).json({
            ok:true,
            msg:'registro Paquete creado',
            id:suc._id
        })
    })
};

const actualizarPaqueteViaje = async(req,res=response)=>{
    const paqueteId=req.params.paqueteId;
    const paquete=req.body;
    await PaqueteViaje.findByIdAndUpdate(paqueteId,{$set:paquete},{new:true})
    res.json({
        msg:'registro actualizado'
    });
};

const getPaqueteViajeById = async(req,res=response)=>{
    const paqueteId=req.params.paqueteId;
    const paquete=req.body;
    await PaqueteViaje.findById(paqueteId)
    res.json({
        paquete
    });
};

const detelePaqueteViaje = (req,res=response)=>{
    const paqueteId=req.params.paqueteId
    PaqueteViaje.findByIdAndDelete(paqueteId,function(err,suc){ //analizar
        if(err){
            console.log(err)
        }
        res.json({
            msg:'Paquete eliminado'
        })
    }) //analizar
};

module.exports = {
    crearPaqueteViaje,
    actualizarPaqueteViaje,
    getPaqueteViajeById,
    detelePaqueteViaje
}