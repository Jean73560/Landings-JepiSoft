import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/icofont.min.css';
import '../public/css/pe-icon-7-stroke.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import { useEffect } from "react";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

export default class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}
        }
    }

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }



    render() {
        const { Component, pageProps } = this.props
        //const router = useRouter();

        /*useEffect(() => {
            const handleRouteChange = (url) => {
                window.gtag("config", "G-7W0DLDJKTQ", {
                    page_path: url,
                });
            };
            router.events.on("routeChangeComplete", handleRouteChange);
            return () => {
                router.events.off("routeChangeComplete", handleRouteChange);
            };
        }, [router.events]);*/

        return (
            <React.Fragment>
                <DefaultSeo
                    title="JepiSoft - Consultoria IT"
                    description="JepiSoft - Consultoria IT. Ofrecemos soluciones tecnologicas adaptadas 100% a tus necesidades."
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://jepisoft.com/',
                        site_name: 'JepiSoft - Consultoria IT',
                    }}
                />

                <Component {...pageProps} />
                {/*<CookieConsent
                    location="bottom"
                    buttonText="Sí, utilizar cookies."
                    onAccept={() => location.reload()}
                    cookieName="CookieConsent"
                    expires={150}
                    enableDeclineButton="true"
                    declineButtonText="No, no utilizar cookies"
                >
                    Poner aquí el mensaje sobre el uso de cookies
                    <a href="#enlace_hacia_politica_de_cookies">Política de Cookies</a>.
                </CookieConsent>*/}

                {/* Preloader */}
                { /*<Loader loading={this.state.loading} /> */}

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}