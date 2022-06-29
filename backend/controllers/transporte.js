const {response}=require('express');
const {
    createTransporte,
    updateTransporte,
    deleteTransporte,
    findTranporte,
    findAllTransporte
} = require('../repositories/transporte');

const crearTransporte = async(req,res=response)=>{
    try {
        const transporte = req.body;
        const response = await createTransporte(transporte);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const actualizarTransporte = async(req,res=response)=>{
    try {
        const transporteId=req.params.transporteId
        const transporte=req.body
        const response = await updateTransporte(transporte,transporteId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getTransporteById = async(req,res=response)=>{
    const transporteId=req.params.transporteId;
    const response = await findTranporte(transporteId);
    res.json({
        response
    });
};

const elimiarTransporte = async(req,res=response)=>{
    try {
        const transporteId = req.params.transporteId;
        const response = await deleteTransporte(transporteId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAllTransportes = async(req,res=response)=>{
    const response = await findAllTransporte();
    res.json({
        response
    });
};

module.exports = {
    crearTransporte,
    actualizarTransporte,
    getTransporteById,
    elimiarTransporte,
    getAllTransportes
};