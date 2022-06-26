//import {body,validatorResult} from "express-validator";
const {body, validationResult} = require("express-validator")
const validarUsuario = [
    body("name")
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    body("email")
    .notEmpty()
    .withMessage('El email es obligatorio'),
    body("email")
    .isEmail().
    withMessage('El mail no es valido'),
    body("password")
    .isLength({min:6})
    .withMessage('La contraseña debe ser de 6 caracteres mínimo'),
    body("cuit")
    .notEmpty()
    .withMessage('El CUIL es obligatorio'),
    body("cuit")
    .isLength({min:13,max:13})
    .withMessage('El CUIL debe de ser de 13 digitos'),
]

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
}

/* module.exports = {
    errorsValidate
} */
module.exports={validarUsuario, errorsValidate}