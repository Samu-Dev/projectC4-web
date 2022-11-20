import React, {Component} from "react";
import { FormPRUEBA } from "./FormPRUEBA";

class CrearReceta extends Component{
    
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            usuario:"",
            cantidad:0,
            valor:"Alto",
            imagen:""
        }
        this.cambio = this.cambio.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    cambio = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]:val});
        console.log("-----------------------");
        console.log(this.state);
    }

    guardar() {
        alert("Guardando...")
    }

    render(){
        return(
            <div className="card w-50 m-auto mt-4 mb-4 border-primary">
                <h1 className="m-auto text-dark mt-3">Nueva Receta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Título Receta" name="nombre" onChange={this.cambio} className="form-control"/>   
                    </div>
                    <div className="form-group mt-3">
                        <FormPRUEBA />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Porciones" name="porciones" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="textarea" placeholder="Ingredientes" name="ingredientes" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Creador" name="usuario" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Plato" name="imagen" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <h5 className="text-dark mt-2 ms-2">CATEGORIA</h5>
                    <div className="form-group">
                        <select name="Categoría" className="form-control mt-3" onChange={this.cambio}>
                            <option>Entrada</option>
                            <option>Plato Fuerte</option>
                            <option>Postre</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Crear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export { CrearReceta };