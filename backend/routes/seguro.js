const {Router} = require('express');
const { crearSeguro, actualizarSeguro, getSeguro, eliminarSeguro, getAllSeguros } = require('../controllers/seguro');
const router = Router();

router.post(
    '/',crearSeguro
);

router.put(
    '/:seguroId',actualizarSeguro
);

router.get(
    '/:seguroId',getSeguro
);

router.get(
    '/',getAllSeguros
);

router.delete(
    '/:seguroId',eliminarSeguro
);

module.exports = router;