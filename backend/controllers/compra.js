const {response}=require('express');
const axios = require('axios');
const {insertCompra,findAllCompra} =require('../repositories/compra');
//const Compra = require('../models/Compra');
//const User=require('../models/User');
//const Paquete=require('../models/Paquete');


const createCompra = async(req,res=response)=>{
    try {
        const compra=req.body;
        const control = await controlCompra()
        const response = await insertCompra(compra);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
} 

const controlCompra = async (cuil,price)=>{
    axios({
        method:'post',
        headers:{   'Content-Type':'application/json',
                    'accept':'application/json'
                },
        url:'http://localhost:8080/operacion',
        data:{
            cuit:cuil,
            fecha_incio:'2022-11-28',
            fecha_fin:'2022-12-12',
            precio:price
        }
    }).then(function(res){
        console.log(res.data.aprobada);
        return(res.data.aprobada);
        //estado=res.data.aprobada
    }).catch(function(err){
        console.log(err);
        return true;
    })
}



const getAllCompra = async(req,res=response)=>{
    const compra=await findAllCompra();
    res.json({
        compra
    })
};


module.exports ={
    createCompra,
    getAllCompra,
    controlCompra
}