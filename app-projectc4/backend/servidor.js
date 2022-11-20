const express = require('express');
const mongoose = require('mongoose');
const app1 = express();
const port = 5000;

const bodyParser = require('body-parser');
app1.use(bodyParser.json());
app1.use(bodyParser.urlencoded({extended:false}));

mongoose
    //.connect("mongodb://localhost:27017/trueke_g47")
    .connect("mongodb+srv://jorandho:abc12345@curso-platzi.umzx8wk.mongodb.net/codeKitchen?retryWrites=true&w=majority")
    .then(console.log("Conectado a la BBDD"))

//CORS
const cors = require('cors');
app1.use(cors());

let Esquema = require('./Modelos/bd_recetas');

const rutas = require('./router/rutas');
app1.use('/servicios', rutas);

const rutas_usr = require('./router/rutas_usr');
app1.use('/usuarios', rutas_usr);

app1.listen(port, () => console.log('Servidor levantado'));