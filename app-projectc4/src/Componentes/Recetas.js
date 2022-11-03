import React from "react";
//import Datos from './Datos.json'

class Recetas extends React.Component{
    constructor(){
        super();
        this.state = {
            btn1: 
                <div>
                    <button formTarget="#formulario1" className="btn btn-primary m-2" onClick={this.editar}>Editar</button>
                    <button className="btn btn-danger m-2" onClick={this.eliminar}>Eliminar</button>
                </div>,
            btn2:
                <div>
                    <button formTarget="#formulario1" className="btn btn-success m-2" onClick={this.intercambiar}>Ver Receta</button>
                </div>
        }
    }

    editar(){
        alert('Editando...');
    }

    intercambiar(){
        alert('Intercambiando');
    }

    eliminar(){
        alert('Eliminando');
    }

    botones(usuario){
        if (usuario === "Georgie") {
            return this.state.btn1;
        } else {
            return this.state.btn2;
        }
    }

    render(){
        return(
            <div className="col-sm-4 text-center mt-4">
                <div className="card border-primary mb-3 p-2 mx-auto" style={{"width": "18rem"}}>
                    <div className="card-body">
                        <img className="card-img-top" height="300" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} alt=""></img>
                        <h5 className="card-title text-dark mt-3">{this.props.nombre}</h5>
                        <p className="card-text text-dark">{this.props.descripcion}</p>
                        <span className="badge bg-danger rounded-pill">Categoría: {this.props.categoria}</span>
                        <br/>
                        <span className="badge bg-success rounded-pill">Usuario: {this.props.usuario}</span>
                        <br/>
                        <span className="badge bg-primary rounded-pill">Porciones: {this.props.porciones}</span>
                        <br/>
                        {this.botones(this.props.usuario)}
                    </div>
                </div>
            </div>
        );
    }
}

export { Recetas };