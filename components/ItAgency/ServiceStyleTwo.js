import React, { Component } from 'react';
import Link from 'next/link';

class ServiceStyleTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="service-style-two ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>Nuestros Servicios</h2>                            
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-info pr-50">
                                    <div className="info-head">
                                        <h2 className="title">Desarrollo Web y Móvil</h2>
                                        <p>Creamos software para atender los retos presentes y futuros de tu organización y del mercado con el objetivo de incrementar el valor de tu negocio, ofreciendo una gran experiencia de usuario que crea fidelidad y constante interacción con tu marca.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Diseño y Desarrollo Web (Mobile First, Responsive, y Adaptive)
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                 Aplicaciones Nativas e híbridas iOS y Android
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                UI / UX Design
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Desarrollo de Bases de Datos
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Gestion de Proyectos Utilizando Metodologias Kanban o Scrum
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Ingenieria DevOps
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-right-img">
                                    <img src="/images/logo-programador.png" alt="Service Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                        <div className="service-style-two ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-info pr-50">
                                    <div className="info-head">
                                        <h2 className="title">Creamos tu tienda en linea</h2>
                                        <p>Te ayudamos a crear tu tienda, Te ofrecemos Consultoría y Servicios Profesionales especializados en e-Commerce para que tengas un negocio en línea exitoso.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Administración Web de clientes y órdenes.
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Buscador inteligente de artículos o productos.
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Catálogo de productos online con carro de compra.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Gestión para catálogo, productos e inventario.
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Integradores de pago seguro como PayPal, Stripe, Open Pay y más.
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Posicionamiento de la tienda en los primeros resultados de Google.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-right-img">
                                    <img src="/images/eCommerece.png" alt="Service Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-style-two ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-left-img">
                                    <img src="/images/Logo-Marketing1.png" alt="Service Image" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-info pl-50">
                                    <div className="info-head">
                                        <h2 className="title">Marketing Digital</h2>
                                        <p>Te ayudamos a definir tu estrategia de marketing para poder ayudar a crecer tu negocio en base a lo que quieren tus usuarios.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                SEO Marketing
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Facebook Ads
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Google Ads
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Tiktok Ads
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Email Marketing
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Google Analytics
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ServiceStyleTwo;
