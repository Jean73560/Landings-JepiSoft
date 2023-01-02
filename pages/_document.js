import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {

        return (
            <Html lang="zxx">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-7W0DLDJKTQ`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    //this defaults to denying
                                    gtag('consent', 'default', {
                                        'analytics_storage': 'denied'
                                    });

                                    gtag('js', new Date());

                                    //este función es la que nos devuelve el valor de la cookie de preferencias
                                    /* function getCookie() {
                                        const value = "; " + document.cookie;
                                        const parts = value.split("; CookieConsent=");
                                        if (parts.length === 2) return parts.pop().split(';').shift();
                                    } */

                                    //únicamente si el valor es true, se cargan los scripts de Google Analytics.
                                    //if(getCookie() === "true"){
                                        gtag('consent', 'update', {
                                            'analytics_storage': 'granted'
                                        });
                                    //}

                                    gtag('config', 'G-7W0DLDJKTQ', {
                                        page_path: window.location.pathname,
                                    });
                                    `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument;