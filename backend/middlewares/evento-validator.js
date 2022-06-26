const {body, validationResult} = require("express-validator");

const validarEvento = [
    body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),
    body("price")
    .notEmpty()
    .withMessage("Es necesario que agregue un precio"),
    body("place")
    .notEmpty()
    .withMessage('La ubicacion es obligatoria'),
    body("place")
    .notEmpty()
    .withMessage('La fecha del partido es obligatoria'),
    //revisar expresion regular
    body("phase")
    .notEmpty()
    .withMessage('La fase es obligatoria'),
    body("sector")
    .notEmpty()
    .withMessage('El sector es obligatorio'),
    
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
}

module.exports={validarUsuario, errorsValidate}