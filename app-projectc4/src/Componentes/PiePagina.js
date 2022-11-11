import './componentes.css';
import React, { Component } from "react";
//import logo from "./logo.png"

class PiePagina extends Component {
    render() {
        return (
            <div className="footer">
                <div className="b-example-divider"></div>
                
                <div className="fluid">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img className="bi" width="150" height="auto" src={process.env.PUBLIC_URL+"./recursos/logo_utp.png"} alt=""></img>
                            </a>
                            <span className="mb-3 mb-md-0 text-white">&copy; 2022 Company, Inc</span>
                            <span className="mb-3 mb-md-0 text-white">Nuestro equipo</span>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export { PiePagina };