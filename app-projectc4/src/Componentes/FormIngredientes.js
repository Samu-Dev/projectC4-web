import React, { Component } from "react";
import { Modalform } from "./Modalform";

class FormIngredientes extends Component {
    constructor() {
        super();
        this.state = {
            ingrediente: []
        }
    }
    agregar = (e) => {
        const input = document.querySelector("[data-input-ingrediente]")
        const cantidad = document.querySelector("[data-input-cantidad]")
        const arrayIngredientes = this.state.ingrediente;
        if (input.value !== '' && cantidad.value !=='') {
            const nuevoIngrediente = {'nombre':input.value, 'cantidad':cantidad.value}
            this.setState({
                [this.ingrediente]: arrayIngredientes.push(nuevoIngrediente)
            });
        input.value = '';
        cantidad.value = '';
        }
        console.log(arrayIngredientes)
    }

    borrar = (e) => {
        const indice = e.target.id;
        const arrayIngredientes = this.state.ingrediente;
        if (indice > -1){
                this.setState({
                    [this.ingrediente]: arrayIngredientes.splice(indice,1)    
                })            
            }
        console.log(arrayIngredientes)
    }

    render() {

        let listaIngredientes = this.state.ingrediente.map((ingrediente, index) => {            
            return <div key={index}>
                        <div className="form-group container">
                            <div className="row">
                                <div className="col-sm-5 col-md-6">
                                    <span className="form-control mt-1" > {ingrediente.cantidad} de {ingrediente.nombre} </span>    
                                </div>
                                <div className="col-sm-5 col-md-4 mt-1"> 
                                    <Modalform /> 
                                    <button id={index} type='button' onClick={this.borrar} className="btn btn-danger ms-1">Borrar</button>
                                </div>
                                <div></div>
                                {/* <div className="margin-right-3"> */}
                            </div>
                        </div>
                    </div>     
        })

        return (
            <div>
                    <div className="row">
                        <div className="col-sm-5 col-md-7">
                            <input type="text" placeholder="Ingrediente" name="valor" className="form-control" data-input-ingrediente></input>
                        </div>
                        <div className="col-sm-5 col-md-3">
                            <input type="text" placeholder="Cantidad" name="valor" className="form-control" data-input-cantidad></input>
                        </div>
                        <div className="col-sm-5 col-md-1">
                            <button type="button" className="btn btn-primary " onClick={this.agregar} name="ingrediente"> Agregar </button>
                        </div>
                    </div>               
                
                <ul className="text-dark">
                    {listaIngredientes}
                </ul>
            
            </div>
        );
    };
}

export { FormIngredientes };