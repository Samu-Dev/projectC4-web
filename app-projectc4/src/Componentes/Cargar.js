import React, {Component} from "react";
import Datos from './Datos.json';
import { Recetas } from "./Recetas";

class Cargar extends Component {
    constructor(){
        super();
        this.state = {
            Datos
        }
        console.log(this.state.Datos.length);
    }
    render() {
        let mostrar = this.state.Datos.map((dato) => {
            return(
                <Recetas 
                    key={dato.nombre}
                    nombre={dato.nombre}
                    categoria={dato.categoria}
                    porciones={dato.porciones}
                    imagen={dato.imagen}
                    
                    
                />
            );
        })
        return(
            <div className="row">
                {mostrar}
                <span className="badge badge-pill badge-light ml-2">
                    {this.state.Datos.length}
                </span>
            </div>
        );
    }
}

export {Cargar}