const {Schema, model} = require('mongoose');

const EventoSchema = Schema({

    name:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:true,
        min: 0
    },
    place:{
        type: String,
        require: true
    },
    play_date:{
        type: String,
        require: true
    },
    phase:{
        type: String,
        require: true
    },
    sector:{
        type: String,       //platea, tribuna superior e inferior, 
        require: true
    },
    games_numbers:{         //cantidad de partidos
        type: Number,
        default: 0
    }
})
  
  module.exports = model('Evento', EventoSchema)