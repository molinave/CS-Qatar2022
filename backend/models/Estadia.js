const {Schema, model} = require('mongoose');

const EstadiaSchema = Schema({

    name:{
        type: String,
        require:true
    },
    stay_type:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:true,
        min: 0
    },
    stars:{
        type: Number,
        require:true,
        min: 0,
        max: 5
    },
    score:{
        type: Number,
        requiere:true,
        min: 0,
        max: 10
    }
})
  
  module.exports = model('Estadia', EstadiaSchema)