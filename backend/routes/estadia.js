const {Router} = require('express');
const {
    crearEstadia,
    actualizarEstadia,
    getEstadiaById,
    getAllEstadia,
    elimiarEstadia
}=require('../controllers/estadia');
const router =Router();

router.post(
    '/',crearEstadia
);

router.put(
    '/:estadiaId',actualizarEstadia
);

router.get(
    '/',getAllEstadia
);

router.get(
    '/:estadiaId',getEstadiaById
);   

router.delete(
    '/:estadiaId',elimiarEstadia
);

module.exports = router;