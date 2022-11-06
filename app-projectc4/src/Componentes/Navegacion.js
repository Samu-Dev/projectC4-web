import './componentes.css';
import React, {Component} from "react";
import {Cargar} from "./Cargar";
import { CrearUsuario } from "./CrearUsuario";
import { CrearReceta } from "./CrearReceta";
import { InicioSesion } from "./InicioSesion";
import { Home } from "./Home.js";

class Navegacion extends Component{
    render(){
        return(
            <div className="bg-light">
                <div className="nav navbar-expand-lg">
                    <ul className="nav nav-tabs nav-pills" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#enlace1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#enlace2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#enlace3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#enlace4" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#enlace5" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace5}</button>
                        </li>
                    </ul>

                    <form className="d-flex ms-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form>
                    <div className="color-red ms-5 mt-2">
                        Usuario: User
                    </div>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active text-white" id="enlace1" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <Home />
                    </div>
                    <div className="tab-pane fade text-white" id="enlace2" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <Cargar />
                    </div>
                    <div className="tab-pane fade text-white" id="enlace3" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                        <CrearReceta />
                    </div>
                    <div className="tab-pane fade text-white" id="enlace4" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                        <CrearUsuario />                        
                    </div>
                    <div className="tab-pane fade text-white" id="enlace5" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                        <InicioSesion />
                    </div>
                </div>
            </div>
        );
    }
}

export {Navegacion};