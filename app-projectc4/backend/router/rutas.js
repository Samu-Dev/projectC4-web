const bodyParser = require('body-parser');
const express = require('express');
const rutas = express.Router();

const Esquema = require('../Modelos/bd_recetas');

//Servicio POST (Create)
rutas.post('/nueva', (req, res) => {
    let body = req.body
    let guardar = new Esquema({
        nombre:body.nombre,
        categoria: body.categoria,
        ingredientes: body.ingredientes,
        porciones: body.porciones,
        instrucciones: body.instrucciones,
        imagen: body.imagen
    })
    guardar.save((err, guardadodb) => {
        if (err) {
            res.send(err);
        }else{
            res.json(guardadodb);
        }
    })
})

// Servicio GET find all (Read)
rutas.get('/recetas', (req,res) => {
    Esquema
        .find({})
        .then(data => res.json(data))
})

// Servicio GET find one (Read)
rutas.get('/recetas/:id', (req,res) => {
    let { id } = req.params
    Esquema
        .findById(id)
        .then(data => res.json(data))
})

// Servicio GET find many by name (Read)
rutas.get('/recetas/busqueda/:nome', (req,res) => {
    let {nome} = req.params
    let xy = new RegExp(nome, "i")
    Esquema
        .find({$or: [{ingredientes: {$regex: xy}}, {nombre: {$regex: xy}}]})  
        .then(data => res.json(data))
})

// Servicio PUT (Update)
rutas.post('/actualizar/:id', (req,res) => {
    let { id } = req.params
    let body = req.body
    Esquema.updateOne({_id:id}, {
        $set:{
            nombre: body.nombre,
            categoria: body.categoria,
            ingredientes: body.ingredientes,
            imagen: body.imagen,
            porciones: body.porciones,
            instrucciones: body.instrucciones
        }
    }, function(err, info) {
        if (err){
            res.send(err)
        }else{
            res.json(info)
        }
    })
})

// Servicio DELETE
rutas.get('/borrar/:id', (req,res) => {
    let {id} = req.params
    Esquema
        .findByIdAndDelete(id)
        .then(res.send("Documento borrado"))
})

module.exports = rutas;