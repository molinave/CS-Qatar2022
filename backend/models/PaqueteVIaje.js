const {Schema, model} = require('mongoose');

const PaqueteSchema = Schema({
    name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        default: 0,
        min: 0
    },
    estado:{
        type: String,
        default: "Disponible"
    },
    stock:{
        type: Number,
        default: 0
    },
    events:{
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: "Evento",
            },
        ],
    },
    stay:{
        type: Schema.Types.ObjectId,
        ref: "Estadia",
    },
    transport:{
        type: Schema.Types.ObjectId,
        ref: "Transporte",
    },
    insurance:{
        type: Schema.Types.ObjectId,
        ref: "seguroMedico",
        require: false,
    }
});

module.exports = model('PaqueteViaje',PaqueteSchema)
