const {Schema, model} = require('mongoose');
 
const TransporteSchema = Schema({
    name:{
        type: String,
        require: true,
    },
    type:{
        type: String,
        require: true
    },
    leave_date:{
        type: String,
        requeire: true
    },
    arrive_date:{
        type: String,
        require: true
    },
    duration:{
        type: Number,
        default: 0,
        min: 0
    }
})

module.exports = model('Transporte',TransporteSchema);