import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(
    () => import('react-modal-video'),
    {ssr: false}
);
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 160,
            density: {
                enable: false
            },
        },
        "color": {
            "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
        },
        size: {
            value: 10,
            random: true
        },
        move: {
            direction: "bottom",
            out_mode: "out",
            speed: 2,
        },
        line_linked: {
            enable: false
        }
    },
    interactivity: {
        events: {
            onclick: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse:{
                distance: 200,
                duration: 0.4
            }
        }
    }
}

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner main-banner2 item-bg1">
                    <div id="particles-js">
                        <Particles 
                            params={{...particleOpt}}
                        />
                    </div> 
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>Agencia de Desarrollo de Software.</span>
                                            <h1>¿Tienes una idea?</h1>
                                            <h1>¡Hagámosla realidad!</h1>
                                            <p>Ofrecemos soluciones en desarrollo de software adaptado 100% a tus necesidades.</p>

                                            {/*<Link href="/contact">
                                                <a className="btn btn-primary">Contáctanos</a>
                                               </Link>*/}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner-animation-image2">
                                            <ReactWOW animation='zoomIn' delay='0.5s'>
                                                <img src="/images/logo-computer.png" className="main-pic" alt="image" />
                                            </ReactWOW>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainBanner;