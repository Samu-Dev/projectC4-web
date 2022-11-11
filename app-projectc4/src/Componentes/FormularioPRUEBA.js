import React, { Component } from "react";



class FormularioPRUEBA extends Component {
    constructor() {
        super();
        this.state = {
            
            ingrediente: [],

            // inputIngredientes: [<form>
            //     <div className="form-group d-flex flex-row mb-2 d-flex">
            //         <input type="text" placeholder="Ingrediente" name="valor" className="ms-2 me-3" ></input><button type="button" className="btn btn-danger ms-3" onClick={this.borrar} name="ingrediente"> - </button>
            //     </div>
            // </form>]

        }
    }
    guardarIngrediente = () => {
        const input = document.querySelector("[data-ingrediente]")
        this.setState({
            [this.ingrediente]: this.state.ingrediente.push(input.value)
        });
        console.log(this.state.ingrediente)        
    }

    // agregarIngrediente = () => {
    //     this.setState({
    //         [this.inputIngredientes]: this.state.inputIngredientes.push(this.state.inputIngredientes[0])
    //     });
    // }

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

    editar = (e) =>{
        const parent = e.target.parentElement;
        console.log(parent);
        // const datoActual = parent.querySelector("p");
        // console.log(datoActual);
        const nuevoDato = parent.querySelector("input");
        console.log(nuevoDato);
        parent.classList.toggle(`hidden`);
        nuevoDato.classList.toggle(`hidden`);
    }

    render() {

        // let listaInputs = this.state.inputIngredientes.map((inputs) => {
        //     return <span>{inputs}</span>
        // })
        
        let listaIngredientes = this.state.ingrediente.map((ingre) => {
            let visualizarIngrediente =
                <div>
                    <li className="">{ingre}</li> 
                    <svg onClick={this.editar} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" /> 
                        </svg> _________
                        <i className="fas fa-trash-alt trashIcon icon text-right" onClick={this.borrar}></i>
                        <input type="text" placeholder="" name="" className="hidden"></input>           
                </div>;
            return (visualizarIngrediente)
        })

        return (
            <div>
                <div className="">
                    
                        <div className="form-group">
                            <input type="text" placeholder="Nombre Ingrediente" name="ingrediente" className="form-control" data-ingrediente></input>
                            <button type="button" className="btn btn-primary" onClick={this.guardarIngrediente} name="ingrediente"> Agregar </button>
                        </div>                    
                    
                    {/* <h1 className="m-auto text-white">INGREDIENTES</h1>
                    <button type="button" className="btn btn-primary" onClick={this.agregarIngrediente} name="ingrediente"> +  
                    </button> */}
                    
                </div>
                {/* <div>
                    {listaInputs}
                </div> */}
                <div>
                    <ul id="inputIngredientes" className="text-white">                        
                        {listaIngredientes}
                    </ul>
                </div>
            </div>
        );               
    };
    
}

export { FormularioPRUEBA };