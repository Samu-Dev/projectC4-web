const mongoose = require('mongoose');

let esquema = mongoose.Schema({
    nombre:String,
    categoria: String,
    ingredientes:Array,
    imagen:String,
    porciones:Number,
    instrucciones:Array,
})

let Esquema = mongoose.model("recetas", esquema);

module.exports = Esquema