import './componentes.css';
import React, { Component } from "react";


class Team extends Component{
    render() {
        return (
            <main>
            <section id="team" class="team">
                <div class="container">
                    <div class="section-title" data-aos="fade-in" data-aos-delay="100">
                        <h2>Equipo 1 Grupo 45</h2>
                        <p></p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="member" data-aos="fade-up">
                                <div class="pic"><img src="" class="img-fluid" alt=""></div>
                                <div class="member-info">
                                <h4>Luisa Fernanda Londoño</h4>
                                <span>Gestora de Base De Datos</span>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-6 col-md-6">
                            <div class="member" data-aos="fade-up" data-aos-delay="150">
                                <div class="pic"><img src="" class="img-fluid" alt=""></div>
                                <div class="member-info">
                                    <h4>Samuel Corredor Carrero</h4>
                                    <span>Desarrollador Front-End</span>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-6 col-md-6">
                            <div class="member" data-aos="fade-up" data-aos-delay="300">
                                <div class="pic"><img src="" class="img-fluid" alt=""></div>
                                <div class="member-info">
                                <h4>Jorge Andrés Hoyos</h4>
                                <span>Desarrollador Back-End</span>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="member" data-aos="fade-up">
                                <div class="pic"><img src="" class="img-fluid" alt=""></div>
                                <div class="member-info">
                                <h4>Jorge Mario Mendoza</h4>
                                <span>Tester</span>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
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