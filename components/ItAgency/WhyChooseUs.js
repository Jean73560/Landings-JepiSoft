import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class WhyChooseUs extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="about-content about-content-two pl-0 mt-0">
                                <div className="section-title">
                                    <h2>¿Quiénes somos?</h2>
                                    <p>Somos una agencia dedicada al desarrollo de Software, Sitios web y Publicidad online con sede en Cuetzalan del Progreso, Puebla, México. Ofrecemos una amplia variedad de servicios profesionales como Desarrollo de aplicaciones a la medida / Websites, Diseño gráfico, eCommerce, Marketing digital, SEO/SEM, Social media management y muchos más a nivel nacional e internacional.</p>
                                </div>

                                <div className="about-text">
                                    <h4>Nuestra Historia</h4>
                                    <p>Fundada en septiembre de 2020, contamos con profesionales apasionados y talentosos dedicados a hacer de Jepi Soft la mejor agencia de Software y Marketing online en todo Mexico y Latinoamerica.</p>                                    
                                    <p>Nuestro dedicado y entusiasta equipo brinda soluciones integrales en diseño y tecnología para ayudar a las empresas y marcas a mejorar su perfil de imagen, presencia en línea y así como sistemas de software. En JEPI SOFT nuestro lema es "Hacemos tu futuro más brillante" y por eso ofrecemos los más altos niveles de calidad en nuestros servicios, garantizando resultados exitosos en cada proyecto que realizamos, razón que nos compromete a dar la mejor atención al cliente, en cada detalle, en todo momento.</p>
                                </div>

                                <div className="about-text">
                                    <h4>Nuestra Misión</h4>
                                    <p>Ser una de las mejores agencias de software y marketing dedicada a brindar soluciones eficaces y creativas, pensando en el desarrollo y éxito de tu empresa o marca.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-12">
                            <div className="about-image right-image">
                                <img src="/images/Programador.png" alt="image" className="rounded-10" />

                                <div className="video-box">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </section>
        );
    }
}

export default WhyChooseUs;