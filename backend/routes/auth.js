const {Router} = require('express');
//const{check}=require('express-validator');
const{errorsValidate}=require('../middlewares/auth-validator');
const{validarUsuario}=require('../middlewares/auth-validator');

const {crearUsuario,loginUsuario,revalidadToken,getAllUsers}=require('../controllers/auth');
const router =Router();

router.post(
    '/register',
    validarUsuario,
    errorsValidate,
    crearUsuario
);

router.post(
    '/',
   validarUsuario,
    errorsValidate,
    loginUsuario
);

router.get('/', getAllUsers);
router.get('/renew', revalidadToken);

module.exports = router;
