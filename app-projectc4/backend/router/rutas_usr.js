const express = require('express');
const rutas_usr = express.Router();
const validatorHandler = require('./../middlewares/validatorHandler');
const { crearUsuarioSchema, getUsuarioSchema, actualizarUsuarioSchema } = require('./../schemas/usuariosSchema');
const bcrypt = require('bcrypt');

const Esquema = require('../Modelos/bd_usuarios');

//Servicio POST (Create)
rutas_usr.post('/nuevo', 
    validatorHandler(crearUsuarioSchema, 'body'),
    async (req, res, bext) => {
        let body = req.body
        let guardar = new Esquema({
            nombres:body.nombres,
            apellidos: body.apellidos,
            edad: body.edad,
            ciudad: body.ciudad,
            email: body.email,
            pswd: body.pswd
        })
        
        const hashedPswd = await bcrypt.hash(body.pswd, 10);
        guardar.pswd = hashedPswd;
        await guardar.save((err, guardadodb) => {
            if (err) {
                res.send(err);
            }else{
                delete res.json['pswd']
                res.json(guardadodb);
            }
        })
    }
);

// Servicio GET find all (Read)
rutas_usr.get('/usuarios', async (req,res) => {
    await Esquema
        .find({})
        .then(data => res.json(data))
});

// Servicio GET find one (Read)
rutas_usr.get('/usuarios/:id', 
    validatorHandler(getUsuarioSchema, 'params'),
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
});

// Servicio GET find by name (Read)
rutas_usr.get('/usuarios/busqueda/:nome', async (req,res) => {
    let {nome} = req.params
    let xy = new RegExp(nome, "i")
    await Esquema
        .find({nombres: {$regex: xy}})  
        .then(data => res.json(data))
});
// Servicio PUT (Update)
rutas_usr.post('/actualizar/:id', 
    validatorHandler(getUsuarioSchema, 'params'),
    validatorHandler(actualizarUsuarioSchema, 'body'),
    async (req, res, next) => {
        let { id } = req.params
        let body = req.body
        await Esquema.updateOne({_id:id}, {
            $set:{
                nombres:body.nombres,
                apellidos: body.apellidos,
                edad: body.edad,
                ciudad: body.ciudad,
                email: body.email,
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
rutas_usr.get('/borrar/:id', async (req,res) => {
    let {id} = req.params
    await Esquema
        .findByIdAndDelete(id)
        .then(res.send("Documento borrado"))
})

module.exports = rutas_usr;