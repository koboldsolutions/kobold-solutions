import '@/styles/globals.css'
import Head from "next/head";
import Script from "next/script";
import "swiper/css";
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const prefix = '/kobold-solutions';

  // Define the relative paths for your scripts
  const scriptPaths = [
    '/assets/js/plugins.js',
    '/assets/js/TweenMax.min.js',
    '/assets/js/charming.min.js',
    '/assets/js/countdown.js',
    '/assets/js/parallax.min.js',
    '/assets/js/splitting.min.js',
    '/assets/js/isotope.pkgd.min.js',
    '/assets/js/scripts.js'
    // Add more script paths as needed
  ];

  return getLayout(
    <>
      <Head>
        <title>Kobold Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Component {...pageProps} />

      {scriptPaths.map((scriptPath, index) => (
        <Script key={index} strategy="beforeInteractive" src={`${prefix}${scriptPath}`}></Script>
      ))}

      {/* <Script strategy="beforeInteractive" src="/kobold-solutions/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/kobold-solutions/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/kobold-solutions/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/kobold-solutions/assets/js/countdown.js"></Script>
      <Script strategy="beforeInteractive" src="/kobold-solutions/assets/js/parallax.min.js"></Script>
      
      <Script strategy="beforeInteractive" src="/kobold-solutions/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/kobold-solutions/assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="lazyOnload" src="/kobold-solutions/assets/js/scripts.js"></Script> */}
       {/* Add more scripts as needed */}
       <Script strategy="lazyOnload" src={`${prefix}/assets/js/scripts.js`}></Script>
    </>
  );
}
