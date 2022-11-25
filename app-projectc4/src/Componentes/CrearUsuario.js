import React, { Component } from "react";
import axios from "axios";

class CrearUsuario extends Component {

    constructor() {
        super();
        this.state = {
            nombres: "",
            apellidos: "",
            edad: 0,
            ciudad: "",
            email: "",
            pswd: ""
        }

    }

    cambio = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
        console.log(this.state)
    }

    guardar = () => {
        axios.post('https://code-kitchen.onrender.com/usuarios/nuevo', this.state)
            .then(alert('NUEVO USUARIO CREADO'))
            .then(
                document.querySelector("[name='nombres']").value = "",
                document.querySelector("[name='apellidos']").value = "",
                document.querySelector("[name='edad']").value = "",
                document.querySelector("[name='ciudad']").value = "",
                document.querySelector("[name='email']").value = "",
                document.querySelector("[name='pswd']").value = "",
            )
            .catch(console.log)

    }

    render() {
        return (
            <div className="card w-50 m-auto mt-4 mb-4 border-primary">
                <h1 className="m-auto text-dark mt-3">Registro Usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre Usuario" name="nombres" onChange={this.cambio} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Apellido" name="apellidos" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Edad" name="edad" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    <div className="form-group">
                        <select name="ciudad" className="form-control mt-3" onChange={this.cambio}>
                            <option>---</option>
                            <option>Barranquilla</option>
                            <option>Bogotá</option>
                            <option>Medellín</option>
                            <option>Pereira</option>
                            <option>Manizales</option>
                            <option>Otra</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Correo Electrónico" name="email" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Contraseña" name="pswd" className="form-control mt-3" onChange={this.cambio} />
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-primary" type="submit" onClick={this.guardar}>Crear usuario</button>
                    </div>
                </form>
            </div>
        );
    }
}

export { CrearUsuario };