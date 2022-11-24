import React, {Component} from "react";
import Datos from './Datos.json';
import { Recetas } from "./Recetas";

class Cargar extends Component {
    constructor(){
        super();
        this.state = {
            Datos
        }
    }
    render() {
        let mostrar = this.state.Datos.map((dato) => {
            return(
                <Recetas 
                    key={dato.nombre}
                    nombre={dato.nombre}
                    usuario ={dato.usuario}
                    categoria={dato.categoria}
                    porciones={dato.porciones}
                    imagen={dato.imagen}
                    ingredientes={dato.ingredientes}
                    instrucciones={dato.instrucciones}   
                />
            );
        })
        return(
            <div className="row">
                {mostrar}               
            </div>
        );
    }
}

export {Cargar}