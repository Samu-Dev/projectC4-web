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
        let input = document.querySelector("[data-texto]")
        this.setState({
            [this.ingrediente]: this.state.ingrediente.push(input.value)
        });
        console.log(this.state.ingrediente);
    }

    eliminarIngrediente = (parent) =>{
        const contenido = parent.querySelector("li").innerHTML;
        console.log(contenido)
        const arrayIngredientes = this.state.ingrediente;
        console.log(arrayIngredientes)
        const x = arrayIngredientes.indexOf(contenido)
        if (x > -1){
            arrayIngredientes.splice(x,1)
        }
        console.log(arrayIngredientes)
    }

    borrar = (e) => {
        const parent = e.target.parentElement;        
        console.log(parent)
        this.eliminarIngrediente(parent);
        parent.remove();
    }

    editar() {
        
        <div className="modal fade" id="ModalCenter" tabindex="-1" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    }

    render() {

        let listaIngredientes = this.state.ingrediente.map((ingre) => {
            return <div className="">
                <li className="margin-right-3">{ingre}
                    <Modalform />
                    <button onClick={this.borrar} className="btn btn-danger">Borrar</button>
                </li>
            </div>
        })

        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Nombre Artículo" name="valor" className="form-control" data-texto></input>
                    </div>
                    <button type="button" className="btn btn-primary " onClick={this.agregar} name="ingrediente"> Agregar </button>
                </form>
                <div>
                    <ul className="text-dark">
                        {listaIngredientes}
                    </ul>
                </div>
            </div>
        );
    };
}

export {FormPRUEBA };