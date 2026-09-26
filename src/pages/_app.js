import '@/styles/globals.css';
import '@/styles/design-system.css';
import Head from "next/head";
import Script from "next/script";
import "swiper/css";
import prefix from '@/common/prefix';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { restoreBrowserLanguage } from '@/common/i18n';

function App({ Component, pageProps }) {
  useEffect(restoreBrowserLanguage, []);

  const getLayout = Component.getLayout || ((page) => page);

  const scriptPaths = [
    '/assets/js/plugins.js',
    '/assets/js/TweenMax.min.js',
    '/assets/js/charming.min.js',
    '/assets/js/countdown.js',
    '/assets/js/parallax.min.js',
    '/assets/js/splitting.min.js',
    '/assets/js/isotope.pkgd.min.js',
    '/assets/js/scripts.js',
  ];

  return <I18nextProvider i18n={i18n}>{getLayout(
    <>
      <Head>
        <title>Kobold Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Component {...pageProps} />

      {scriptPaths.map((scriptPath, index) => (
        <Script key={index} strategy="beforeInteractive" src={`${prefix}${scriptPath}`} />
      ))}

      <Script strategy="lazyOnload" src={`${prefix}/assets/js/scripts.js`} />
    </>
  )}</I18nextProvider>;
}

export default App;