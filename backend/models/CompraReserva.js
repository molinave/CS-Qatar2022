const {Schema, model} = require('mongoose');

const CompraSchema = Schema({
    number:{
        type: Number,
        require: true,
        unique: true
    },
    price:{
        type: Number,
        require: true,
        min: 0
    },
    status:{
        type: String,
        require: true,
    }

})