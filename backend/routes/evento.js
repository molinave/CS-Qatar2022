const {Router} = require('express');
const {
    crearEvento,
    actualizarEvento,
    getEvento,
    getAllEvento,
    eliminarEvento
}=require('../controllers/evento');
const router =Router();

router.post(
    '/',crearEvento
);

router.put(
    '/:eventoId',actualizarEvento
);

router.get('/',getAllEvento);

router.delete(
    '/:eventoId',eliminarEvento
);
router.get(
    '/:eventoId',getEvento
);

//router.get('/:eventoId', getEventoById);

module.exports = router;
