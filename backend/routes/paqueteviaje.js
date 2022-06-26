const {Router} = require('express');
const {
    crearPaqueteViaje
    
}=require('../controllers/paqueteviaje.js');
const router =Router();

router.post(
    '/',crearPaqueteViaje
);

// outer.put(
// '/r:paqueteId',updatePaquete
// )

// router.get(
// '/:paqueteId',getPaqueteById
// )



// router.get(
// '/',getAllPaquete
// )

// router.delete(
// '/:paqueteId',detelePaquete
// )



module.exports = router;