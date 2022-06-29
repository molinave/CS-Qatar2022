const {Router} = require('express');
const { crearTransporte, actualizarTransporte, getTransporteById, elimiarTransporte, getAllTransportes } = require('../controllers/transporte');
const router = Router();

router.post(
    '/',crearTransporte
);

router.put(
    '/:transporteId',actualizarTransporte
);

router.get(
    '/:transporteId',getTransporteById
);

router.get(
    '/',getAllTransportes
);

router.delete(
    '/:transporteId',elimiarTransporte
);

module.exports = router;