const {body, validationResult} = require("express-validator");

const validarTransporte = [
    body("name")
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    body("type")
    .notEmpty()
    .withMessage('El tipo es obligatorio'),
    body("leave_date")
    .notEmpty()
    .withMessage('La fecha de salida es obligatoria'),
    body("arrive_date")
    .notEmpty()
    .withMessage('La fecha de llegada es obligatoria'),
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

module.exports = {validarTransporte,errorsValidate};