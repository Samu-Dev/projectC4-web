import React, {Component} from "react";

class CrearUsuario extends Component{
    
    constructor(){
        super();
        this.state={
            nombre:"",
            apellido:"",
            edad:0,
            ciudad:"",
            correo:"",
            clave1:"",
            clave2:""
        }
        this.cambio = this.cambio.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    cambio = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({
            [nam]:val
        });
    }

    guardar() {
        alert("Guardando...")
    }

    render(){
        return(
            <div className="card w-50 m-auto mt-4 mb-4 border-primary">
                <h1 className="m-auto text-dark mt-3">Registro Usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre Usuario" name="nombre" onChange={this.cambio} className="form-control"/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Apellido" name="apellido" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Edad" name="edad" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <h5 className="text-dark mt-2 ms-2">Ciudad</h5>
                    <div className="form-group">
                        <select name="ciudad" className="form-control mt-3" onChange={this.cambio}>
                            <option>Barranquilla</option>
                            <option>Bogotá</option>
                            <option>Medellín</option>
                            <option>Pereira</option>
                            <option>Otra</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Correo Electrónico" name="correo" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Contraseña" name="clave1" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Repita su Contraseña" name="clave2" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Crear usuario</button>
                    </div>
                </form>
            </div>
        );
    }
}

export { CrearUsuario };