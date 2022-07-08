const {body, validationResult} = require("express-validator");

const validarCompra = [
    body("precio")
    .notEmpty
    .withMessage('El precio es obligatorio'),
    body("compra.usuario")
    .notEmpty
    .withMessage('El usuario no existe'),
    body("compra.paquete")
    .notEmpty
    .withMessage('El paquete no existe')
];

const errorsValidate = (req,res,next) =>{
    //validarUsuario;
    let errors = validationResult (req);
    console.log(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    } else {
        next();
    }
};

module.exports = {validarCompra,errorsValidate};