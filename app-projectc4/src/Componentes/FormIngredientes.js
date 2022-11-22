import React, { Component } from "react";
// import { Modalform } from "./Modalform";

class FormIngredientes extends Component {
    constructor() {
        super();
        this.state = {
            ingrediente: []
        }
    }
    agregar = (e) => {
        const input = document.querySelector("[data-input-ingrediente]")
        const arrayIngredientes = this.state.ingrediente;
        if (input.value !== '') {
            const nuevoIngrediente = input.value
            this.setState({
                [this.ingrediente]: arrayIngredientes.push(nuevoIngrediente)
            });
        input.value = '';        
        }
        console.log(arrayIngredientes)
    }

    borrar = (e) => {
        const indice = e.target.getAttribute('data-boton-eliminar');
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
                                    <button data-boton-eliminar={index} type='button' onClick={this.borrar} className="btn btn-danger ms-1">Borrar</button>
                                </div>
                            </div>
                        </div>
                    </div>     
        })

        return (
            <>
                    <div className="row">
                        <div className="col-sm-5 col-md-7">
                            <input type="text" placeholder="Ingrediente" name="ingrediente" className="form-control" data-input-ingrediente></input>
                        </div>
                        <div className="col-sm-5 col-md-1">
                            <button type="button" className="btn btn-primary" onClick={this.agregar} name="ingrediente"> Agregar </button>
                        </div>
                    </div>               
                
                <ul className="text-dark">
                    {listaIngredientes}
                </ul>
            
            </>
        );
    };
}

export { FormIngredientes };