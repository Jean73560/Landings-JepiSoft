import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';

import MainBanner from '../components/DefaultHomeTwo/MainBanner';
import Footer from '../components/Layouts/Footer';

import OurServices from '../components/ItAgency/OurServices';
import ServiceStyleTwo from '../components/ItAgency/ServiceStyleTwo';
import WhyChooseUs from '../components/ItAgency/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Feedback from '../components/Common/Feedback';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo';
import Newsletter from '../components/Common/Newsletter';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
class Index extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <Navbar />
                <MainBanner /> 
                <ServiceStyleTwo />
                <WhyChooseUs />
                {/*<TeamStyleTwo />*/}
                <div className="pb-100">
                    <ContactInfo/>
                    {/*<ContactForm/>*/}
                </div>
                {/*<Footer />*/}
                <div className="copyright-area">
                    <div className="container">
                        <p>&copy; Copyright {currentYear} JepiSoft. Todos los Derechos Reservados</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;