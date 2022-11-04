import React, { Component } from "react";

class InicioSesion extends Component {tabIndex

    constructor(){
        super();
        this.state={
            usuario:"",
            cont:""
        }
        this.cambio = this.cambio.bind(this);
    }

    cambio(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="text-center">
                <main className="form-signin w-50 m-auto card border-primary mt-4 p-4">
                    <form>
                        <img className="mb-4" src={process.env.PUBLIC_URL+"./recursos/logo_trueke.png"} alt="" width="100" height="auto"/>
                        <h1 className="h3 mb-3 fw-normal text-dark">Por favor inicie sesión</h1>

                        <div className="form-floating text-dark">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="usuario" onChange={this.cambio}/>
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating text-dark mt-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="cont" onChange={this.cambio}/>
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>

                        <div className="checkbox mb-3 mt-2">
                            <label className="text-dark">
                                <input className="text-dark" type="checkbox" value="remember-me"/> Recuérdame
                            </label>
                        </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
                            <p className="mt-5 mb-3 text-muted">Trueke &copy; 2022</p>
                    </form>
                </main>
            </div>
        )
    }
}

export { InicioSesion };