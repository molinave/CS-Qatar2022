const {response, response}=require('express');
const Paquete = require('../models/Paquete');
const url = require('url');
const querystring = require('querystring');
const { newPaquete, actualizarPaquete, eliminarPaquete, findPaquete } = require('../repositories/paquete');
const { find } = require('../models/Paquete');

const createPaquete = async(req,res=response)=>{
    try {
        const paquete = req.body;
        const response = await newPaquete(paquete);
        res.status(200).send(response);
    return paquete;
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updatePaquete = async(req,res=response)=>{
    try {
        const paqueteId = req.params.paqueteId;
        const response = actualizarPaquete(paqueteId,req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPaqueteById = async(req,res=response)=>{
    const paqueteId=req.params.paqueteId
    const response = findPaquete(paqueteId)
     //usar en paquete con los diferentes idS
    res.json({
        response
    })
}


const getAllPaquete = async(req,res=response)=>{
    let parsedUrl= url.parse(req.url);
    let parsedQuery=querystring.parse(parsedUrl.query);
    const{estrella,partidos,puntuacion,fase,vuelo}=parsedQuery;
    console.log(estrella,partidos,puntuacion,fase,vuelo)
    const query= {};
    query['estado']='disponible'
    if(estrella) query['hotel.estrellas']=estrella
    if(partidos) query['partido.cant_partidos']=partidos
    if(puntuacion) query['hotel.puntuacion']=puntuacion
    if(fase) query['partido.fase']=fase
    const paquetes=await Paquete.find(query)
    res.json({
        paquetes
    })
}


const detelePaquete = (req,res=response)=>{
    try {
        const paqueteId=req.params.paqueteId
        const response = eliminarPaquete(paqueteId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports ={
    createPaquete,
    updatePaquete,
    getPaqueteById,
    getAllPaquete,
    detelePaquete,
}