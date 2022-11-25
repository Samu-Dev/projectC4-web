import React, { Component } from "react";
import axios from "axios";

class InicioSesion extends Component {
    tabIndex

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }

    }

    cambio = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    cargarUsuario = () => {
        axios.post('https://code-kitchen.onrender.com/auth/login', this.state)
            .then(data => {
                console.log(data['data']['user'])
                alert(`BIENVENIDO ${data['data']['user']['nombres']}`)
                let nombres = data['data']['user']['nombres']
                let id = data['data']['user']['_id']
                window.localStorage.setItem("nombres", nombres)
                window.localStorage.setItem("idUsuario", id)
            })
            // .then(json => console.log(json))
            // .then(console.log(data))
            // .then(data => alert(`BIENVENIDO ${data['data']['user']['nombres']}`))
            // .then(data => window.localStorage.setItem("nombres", data['user']['nombres']))
            // .then(data => window.localStorage.setItem("idUsuario", String(data['user']['_id'])))
            // .then(
            //     document.querySelector("[name='email']").value = "",
            //     document.querySelector("[name='password']").value = "", )               
            .catch(e => ({ e }))

        // setTimeout(() => {
        //     window.location.href="http://localhost:3000/"
        // }, 3000);
    }

    render() {
        return (
            <div className="text-center">
                <main className="form-signin w-50 m-auto card border-primary mt-4 p-4">
                    <form>
                        <img className="mb-4" src={process.env.PUBLIC_URL + "./recursos/logo_trueke.png"} alt="" width="100" height="auto" />
                        <h1 className="h3 mb-3 fw-normal text-dark">Por favor inicie sesión</h1>

                        <div className="form-floating text-dark">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={this.cambio} />
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating text-dark mt-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={this.cambio} />
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>

                        <div className="checkbox mb-3 mt-2">
                            <label className="text-dark">
                                <input className="text-dark" type="checkbox" value="remember-me" /> Recuérdame
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.cargarUsuario}>Iniciar Sesión</button>
                        <p className="mt-5 mb-3 text-muted"> Code : Kitchen &copy; 2022</p>
                    </form>
                </main>
            </div>
        )
    }
}

export { InicioSesion };