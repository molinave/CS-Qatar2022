import {body,validatorResult} from "express-validator";
//import { RequestHandler } from "express";
//import { model } from "mongoose";

export const validatePostEstadia = [
    body("name")
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    body("stay_type")
    .notEmpty()
    .withMessage('El tipo es obligatorio'),
    body("price")
    .isNumeric()
    .withMessage('Debe ingresar un valor numérico'),
    body("price")
    .isEmpty()
    .withMessage('Debe ingresar un precio'),
];

const errorsValidate = (req,res,next) =>{
    let errors = validatorResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }else{
            next();
        }
}

module.exports = {
    errorsValidate
}