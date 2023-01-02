import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Contáctanos</h2>                            
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3>Correo</h3>                                
                                <p>jeanpierresoto93@gmail.com</p>
                            </div>
                        </div>

            {/*<div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Visitanos</h3>
                                <p>Cancun, <br /> Quintana Roo, Mexico.</p>
                                { /*<p>Cuetzalan del Progreso, <br /> Puebla, Mexico.</p>*/ }
                            </div>
                        </div>*/}

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Llamanos</h3>
                                <p>+52 9982212701</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;
