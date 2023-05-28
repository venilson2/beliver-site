import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
        <Script src="js/detect-support.js"/>
        <Head>
            <title>Bateria — Premium Podcast HTML Template</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD9t1DYlDDHAAAAAXRSTlMAQObYZgAAACBJREFUCNdjAAI2CEpgSAOiNBCq/wdEEDZQECgFUQMEAM3ZCJuu6hSoAAAAAElFTkSuQmCC" />
            <link rel="stylesheet" href="/css/css2.css" />
            <link rel="stylesheet" href="/css/materialdesignicons.css" />
            <link rel="stylesheet" href="/css/fancybox.css" />
            <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <Component {...pageProps} />
        <Script src="js/fancybox.min.js"/>
        <Script src="js/functions.js"/>
      </>
    );
  };

  export default MyApp;