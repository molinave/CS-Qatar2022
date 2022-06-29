const {response}=require('express');
const {
    createEstadia,
    updateEstadia,
    deleteEstadia,
    getAllEstadias,
    getEstadiaId
} = require('../repositories/estadia');
//const Estadia = require('../models/Estadia');

const crearEstadia = async(req,res=response)=>{
    //console.log("Se guardo",req.body)
    try {
        const estadia = req.body;
        const response = await createEstadia(estadia);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const actualizarEstadia = async(req,res=response)=>{
    try {
        const estadiaBody = req.body;
        const estadia = await updateEstadia(estadiaBody,req.params.estadiaId);
        res.status(200).send(estadia)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getEstadiaById = async(req,res=response)=>{
    const estadiaId=req.params.estadiaId;
    const estadia=await getEstadiaId(estadiaId);
     //usar en paquete con los diferentes idS
    res.json({
        estadia
    })
};


const getAllEstadia = async(req,res=response)=>{
    const estadia=await getAllEstadias();
    res.json({
        estadia
    })
}

const elimiarEstadia = async(req,res=response)=>{
    try {
        const estadia = await deleteEstadia(req.params.estadiaId);
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