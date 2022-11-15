import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { PiePagina } from './Componentes/PiePagina';
import { Navegacion } from './Componentes/Navegacion';
import { Encabezado } from './Componentes/Encabezado';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Encabezado />
    <Navegacion enlace1="Home" enlace2="Recetario" enlace3="Crear receta" enlace4="Crear Usuario" enlace5="Iniciar Sesión" enlace6="Formulario P"/>

    <PiePagina/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
