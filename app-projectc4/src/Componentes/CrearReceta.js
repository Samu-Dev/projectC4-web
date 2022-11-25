import React, { Component } from "react";
import axios from "axios";

class CrearReceta extends Component {

    constructor() {
        super();
        this.state = {            
            nombre: "",
            categoria: "",
            ingredientes: "",
            porciones: 1,
            instrucciones: "",
            imagen: "",            
            idUsuario: "window.localStorage.getItem('id')", 
            
        }
        this.cambio = this.cambio.bind(this);
        this.guardar = this.guardar.bind(this);

    }

    cambio(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
        console.log(this.state)
    }

    guardar() {
        console.log(this.state)
        axios.post('https://code-kitchen.onrender.com/recetas/nueva', this.state)
            .then(console.log('RECETA CREADA'))
            .catch(console.log)            
            document.querySelector("[name='nombre']").value=""
            document.querySelector("[name='ingredientes']").value=""
            document.querySelector("[name='categoria']").value=""
            document.querySelector("[name='porciones']").value=""
            document.querySelector("[name='instrucciones']").value=""            
            document.querySelector("[name='imagen']").value=""
    }    

    render() {
        
        return (
            <div className="card w-50 m-auto mt-4 mb-4 border-primary" >
                <h1 className="m-auto text-dark mt-3">Nueva Receta</h1>
                <h4 className="m-auto text-dark mt-3"> AUTOR: <i>{window.localStorage.getItem('nombres')}</i></h4>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Título Receta" name="nombre" onChange={this.cambio} className="form-control mt-3" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" placeholder="Ingredientes" name="ingredientes" className="form-control mt-3" onChange={this.cambio}/> 
                    </div>
                    <h6 className="text-dark mt-3 mb-0">CATEGORIA</h6>
                    <div className="form-group">
                        <select name="categoria" className="form-control mt-1" onChange={this.cambio}>
                            <option>Entrada</option>
                            <option>Plato Fuerte</option>
                            <option>Postre</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Porciones" name="porciones" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    <div className="form-group">
                        <textarea type="text" placeholder="Instrucciones" name="instrucciones" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen url" name="imagen" className="form-control mt-2" onChange={this.cambio} />
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