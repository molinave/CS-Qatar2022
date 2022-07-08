const { query } = require("express");
const Compra = require("../models/Compra");
const Paquete = require("../models/Paquete");
const User = require("../models/User");
const {controlCompra} = require('../controllers/compra');


const insertCompra = async(compraIn)=>{
    const paqueteId=compraIn.paquete;
    const paquete = await Paquete.findById(paqueteId);

    const userId=compraIn.usuario;
    const user=await User.findById(userId);
    const validarCompra = await controlCompra(user.cuit,paquete.precio);
    
    if (validarCompra) {

    const compra = await new Compra()
    //copio usuario
    compra.usuario.name=user.name;
    compra.usuario.apellido=user.apellido;
    compra.usuario.email=user.email;
    compra.usuario.telefono=user.telefono;
    //copio paquete
    compra.paquete.seguro=paquete.seguro;
    compra.paquete.partido=paquete.partido;
    compra.paquete.hotel=paquete.hotel;
    compra.paquete.transporte=paquete.transporte;
    compra.precio=paquete.precio;

    compra.estado=compraIn.estado;
    compra.precio=compraIn.precio;

    if (paquete.stock>1) {
        const paqueteUpdate= paquete.updateOne({   stock:paquete.stock-1});
        const compraSave = compra.save();
        await Promise.all([paqueteUpdate,compraSave]).then(()=>{
            return compraSave
        })
    } else {
        const paqueteUpdate=paquete.updateOne({stock:0,estado:'Vendido' });
        const compraSave = compra.save();
        await Promise.all([paqueteUpdate,compraSave]).then(()=>{
            return compraSave
        })
    }
} else {
    return "No tiene permisos para realizar la compra"    
}
};

const findAllCompra = async(query) =>{
    const compra = await Compra.find(query);
    return compra;
};


module.exports = {
    insertCompra,
    findAllCompra
};
