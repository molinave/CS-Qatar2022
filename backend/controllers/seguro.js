const { getEventoById } = require('../repositories/evento');
const { createSeguro, updateSeguro, deleteSeguro, findSeguro } = require('../repositories/seguro');

const crearSeguro = async(req,res=response)=>{
    try{
        const seguro = req.body;
        const response = await createSeguro(seguro);
        res.status(200).send(response);
    }catch(error){
        res.status(500).send(error.message);
    }
};

const actualizarSeguro = async(req,res=response)=>{
    try {
        const seguroId = req.params.seguroId;
        const seguro = req.body;
        const response = await updateSeguro(seguro,seguroId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const eliminarSeguro = async(req,res=respons)=>{
    try {
        const seguroId = req.params.seguroId;
        const response = await deleteSeguro(seguroId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAllSeguros = async(req,res=response)=>{
    const response = await findAllSeguro();
    return response;
};

const getSeguro = async(req,res=response)=>{
    const seguroId = req.params.seguroId;
    const response = await getEventoById(seguroId);
    return response;
};

module.exports = {
    crearSeguro,
    actualizarSeguro,
    eliminarSeguro,
    getAllSeguros,
    getSeguro
};