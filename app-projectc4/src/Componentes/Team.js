import './componentes.css';
import React, { Component } from "react";


class Team extends Component{
    render() {
        return (
            <main>
            <section id="team" className="team">
                <div className="container">
                    <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                        <h2 className="text-dark">Equipo 1 Grupo 45</h2>
                        <p></p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="member" data-aos="fade-up">
                                <div className="pic"><img src="https://github.com/Samu-Dev/projectC4-web/blob/main/IMAGENES/fotos-team/Luisa.png" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                <h4>Luisa Fernanda Londoño</h4>
                                <span>Gestora de Base De Datos</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-6 col-md-6">
                            <div className="member" data-aos="fade-up" data-aos-delay="150">
                                <div className="pic"><img src="https://github.com/Samu-Dev/projectC4-web/blob/main/IMAGENES/fotos-team/Samuel.png" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Samuel Corredor Carrero</h4>
                                    <span>Desarrollador Front-End</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-6 col-md-6">
                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                <div className="pic"><img src="https://github.com/Samu-Dev/projectC4-web/blob/main/IMAGENES/fotos-team/JorgeAndres.png" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                <h4>Jorge Andrés Hoyos</h4>
                                <span>Desarrollador Back-End</span>
                                <div className="social">
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="member" data-aos="fade-up">
                                <div className="pic"><img src="https://github.com/Samu-Dev/projectC4-web/blob/main/IMAGENES/fotos-team/JorgeMario.png" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                <h4>Jorge Mario Mendoza</h4>
                                <span>Tester</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>        
                </div>
            </section>
        </main>
        )
    }
}

export { Team };