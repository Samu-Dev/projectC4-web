import React, { Component } from "react";

class CrearReceta extends Component {

    constructor() {
        super();
        this.state = {
            nombre: "",
            categoria: "",
            usuario: "",
            ingredientes: [],
            imagen: "",
            porciones: "",
            instrucciones: ""
        }
        this.cambio = this.cambio.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    cambio = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
    }

    guardar() {
        alert("Guardando...")
    }

    render() {
        return (
            <div className="card w-50 m-auto mt-4 mb-4 border-primary" >
                <h1 className="m-auto text-dark mt-3">Nueva Receta</h1>
                <h4 className="m-auto text-dark mt-3"> AUTOR: <i>{this.props.usuario}</i> </h4>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Título Receta" name="nombre" onChange={this.cambio} className="form-control mt-3" />
                    </div>
                    <div className="form-group mt-3 ">
                        {/* <input type="text" placeholder="Ingredientes" name="ingredientes" className="form-control mt-3" onChange={this.cambio}/>    */}
                        {/* <FormIngredientes /> */}
                    </div>
                    <h6 className="text-dark mt-3 mb-0">CATEGORIA</h6>
                    <div className="form-group">
                        <select name="Categoría" className="form-control mt-1" onChange={this.cambio}>
                            <option>Entrada</option>
                            <option>Plato Fuerte</option>
                            <option>Postre</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Porciones" name="porciones" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    <div className="form-group">
                        <textarea type="text" placeholder="Instrucciones" name="ingredientes" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    {/* <div className="form-group">
                        <input type="text" placeholder="Creador" name="usuario" className="form-control mt-3" onChange={this.cambio}/>   
                    </div> */}
                    <h6 className="text-dark p-0 mt-3 mb-0">IMAGEN</h6>
                    <div className="form-group">
                        <input type="file" placeholder="Imagen" name="imagen" className="form-control mt-2" onChange={this.cambio} />
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