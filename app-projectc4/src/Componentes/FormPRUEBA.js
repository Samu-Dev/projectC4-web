import React, { Component } from "react";
import { Modalform } from "./Modalform";

class FormPRUEBA extends Component {
    constructor() {
        super();
        this.state = {
            ingrediente: []
        }
    }
    agregar = (e) => {
        let input = document.querySelector("[data-input-ingrediente]")
        if (input.value !== ''){
            this.setState({
                [this.ingrediente]: this.state.ingrediente.push(input.value)
            });
            console.log(this.state.ingrediente);
        } 
        
        
    } 

    borrar = (e) => {
        const parent = e.target.parentElement;        
        console.log(parent)
        const contenido = parent.querySelector("span").innerHTML;
        console.log(contenido)
        const arrayIngredientes = this.state.ingrediente;
        console.log(arrayIngredientes)
        const indice = arrayIngredientes.indexOf(contenido)
        if (indice > -1){
            arrayIngredientes.splice(indice,1)
        }
        console.log(arrayIngredientes)
        parent.remove();
    }
    
    editar = (e) =>{
        
    }

    render() {

        let listaIngredientes = this.state.ingrediente.map((ingrediente) => {
            return <div>
                        <li className="margin-right-3">
                            <span>{ingrediente}</span>                    
                            <Modalform />
                            <button type='button' onClick={this.borrar} className="btn btn-danger">Borrar</button>
                        </li>
                    </div>
        })        

        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Nombre Artículo" name="valor" className="form-control" data-input-ingrediente></input>
                    </div>
                    <button type="button" className="btn btn-primary " onClick={this.agregar} name="ingrediente"> Agregar </button>
                </form>
                <ul className="text-dark" data-presentacion-ingredientes>
                    {listaIngredientes}
                </ul>
            </div>
        );
    };
}

export {FormPRUEBA };