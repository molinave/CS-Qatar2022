const {response}=require('express');
const Transporte = require('../models/Transporte');

const crearTransporte = async(req,res=response)=>{
    const evento = new Transporte(req,res);

    await evento.save(function(err,suc){
        if(err){
            console.log(err)
        }
        res.status(201).json({
            ok:true,
            msg:'registro Transporte creado',
            id:suc._id
        })
    })
}

const actualizarTransporte = async(req,res=response)=>{
    const transporteId=req.params.transporteId
    const transporte=req.body
    await Transporte.findByIdAndUpdate(transporteId,{$set:transporte},{new:true})
    res.json({
        msg:'registro actualizado'
    });
}

const getTransporteById = async(req,res=response)=>{
    const transporteId=req.params.transporteId;
    const transporte=req.body;
    await Transporte.findById(transporteId)
    res.json({
        transporte
    });
};

// getAllTransporte

module.exports = {
    crearTransporte,
    actualizarTransporte,
    getTransporteById
}