const express = require('express');
const rutas_usr = express.Router();

const Esquema = require('../Modelos/bd_usuarios');

//Servicio POST (Create)
rutas_usr.post('/nuevo', (req, res) => {
    let body = req.body
    let guardar = new Esquema({
        nombres:body.nombres,
        apellidos: body.apellidos,
        edad: body.edad,
        ciudad: body.ciudad,
        email: body.email,
        pswd: body.pswd
    })
    guardar.save((err, guardadodb) => {
        if (err) {
            res.send(err);
        }else{
            res.json(guardadodb);
        }
    })
    //res.json({body})
})

// Servicio GET find all (Read)
rutas_usr.get('/usuarios', (req,res) => {
    Esquema
        .find({})
        .then(data => res.json(data))
})

// Servicio PUT (Update)
rutas_usr.post('/actualizar', (req,res) => {
    let body = req.body
    Esquema.updateOne({nombre:body.nombre}, {
        $set:{
            edad: body.edad,
            cont: "no existe"
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
rutas_usr.get('/borrar/:id', (req,res) => {
    let {id} = req.params
    Esquema
        .findByIdAndDelete(id)
        .then(res.send("<h1>Documento borrado</h1>"))
})

module.exports = rutas_usr;