const {response}=require('express');
const {
    createEstadia,
    updateEstadia,
    deleteEstadia
} = require('../repositories/estadia');
//const Estadia = require('../models/Estadia');

const crearEstadia = async(req,res=response)=>{
    //console.log("Se guardo",req.body)
    const estadia = createEstadia(req.body);
    //const estadia=new Estadia(req.body)
    
    await estadia.save(function(err,suc){
        if(err){
            console.log(err)
        }
        res.status(201).json({
            ok:true,
            msg:'se registro la Estadia',
            id:suc._id
        })
    })
}

const actualizarEstadia = async(req,res=response)=>{
    const estadia = updateEstadia(req.body,req.params._id)
    //const estadiaId=req.params.estadiaId
    //const estadia=req.body
    //await Estadia.findByIdAndUpdate(estadiaId,{$set:estadia},{new:true})
    await estadia.save(function(err,suc){
        if(err){
            console.log(err);
        };
        res.status(201).json({
            ok:true,
            msg:'estadia actualizada'
        })
    })
}

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
    const estadia = deleteEstadia(req.params._id);
    estadia.save(function(err,suc){
        if (err) {
            console.log(err);
        };
        res.status(201).json({
            ok: true,
            msg: 'Estadia eliminada'
        })
    })
};

module.exports ={
    crearEstadia,
    actualizarEstadia,
    //getEstadiaById,
    //getAllEstadia,
    elimiarEstadia
}