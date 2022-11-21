const express = require('express');
const rutas = express.Router();
const validatorHandler = require('./../middlewares/validatorHandler');
const { crearRecetaSchema, getRecetaSchema, actualizarRecetaSchema } = require('./../schemas/recetasSchema')

const Esquema = require('../Modelos/bd_recetas');

//Servicio POST (Create)
rutas.post('/nueva', 
    validatorHandler(crearRecetaSchema, 'body'),
    async (req, res, bext) => {
        let body = req.body
        let guardar = new Esquema({
            nombre:body.nombre,
            categoria: body.categoria,
            ingredientes: body.ingredientes,
            porciones: body.porciones,
            instrucciones: body.instrucciones,
            imagen: body.imagen,
            idUsuario: body.idUsuario,
        })
            
        await guardar.save((err, guardadodb) => {
            if (err) {
                res.send(err);
            }else{
                res.json(guardadodb);
            }
        })
    }
);

// Servicio GET find all (Read)
rutas.get('/recetas', async (req,res) => {
    await Esquema
        .find({})
        .then(data => res.json(data))
})

// Servicio GET find one (Read)
rutas.get('/recetas/:id', 
    validatorHandler(getRecetaSchema, 'params'),
    async (req,res, next) => {
        try{
            let { id } = req.params
            await Esquema
                .findById(id)
                .then(data => res.json(data))
                .catch(err => console.log(err))
        } catch (error) {
            next(error);
        }
})

// Servicio GET find many by name (Read)
rutas.get('/recetas/busqueda/:nome', async (req,res) => {
    let {nome} = req.params
    let xy = new RegExp(nome, "i")
    await Esquema
        .find({$or: [{ingredientes: {$regex: xy}}, {nombre: {$regex: xy}}]})  
        .then(data => res.json(data))
})

// Servicio PUT (Update)
rutas.post('/actualizar/:id', 
    validatorHandler(getRecetaSchema, 'params'),
    validatorHandler(actualizarRecetaSchema, 'body'),
    async (req, res, next) => {
        let { id } = req.params
        let body = req.body
        await Esquema.updateOne({_id:id}, {
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
            .clone()
            .catch(err => console.log(err))
    }
);

// Servicio DELETE
rutas.get('/borrar/:id', async (req,res) => {
    let {id} = req.params
    await Esquema
        .findByIdAndDelete(id)
        .then(res.send("Documento borrado"))
})

module.exports = rutas;