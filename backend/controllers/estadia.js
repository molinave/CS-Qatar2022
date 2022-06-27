const {response}=require('express');
const {
    createEstadia,
    updateEstadia,
    deleteEstadia
} = require('../repositories/estadia');
//const Estadia = require('../models/Estadia');

const crearEstadia = async(req,res=response)=>{
    //console.log("Se guardo",req.body)
    try {
        const estadia = createEstadia(req.body);
        res.status(200).send(estadia)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const actualizarEstadia = async(req,res=response)=>{
    try {
        const estadiaBody = req.body;
        const estadia = updateEstadia(estadiaBody,req.params.estadiaId);
        res.status(200).send(estadia)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getEstadiaById = async(req,res=response)=>{
    console.log(req)
    const estadiaId=req.params.estadiaId
    const estadia=await Estadia.findById(estadiaId)
     //usar en paquete con los diferentes idS
    console.log(estadia)
    res.json({
        estadia
    })
}


const getAllEstadia = async(req,res=response)=>{
    const estadia=await Estadia.find()
    res.json({
        estadia
    })
}

const elimiarEstadia = (req,res=response)=>{
    try {
        const estadia = deleteEstadia(req.params.estadiaId);
        res.status(200).send(estadia)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports ={
    crearEstadia,
    actualizarEstadia,
    getEstadiaById,
    getAllEstadia,
    elimiarEstadia
}