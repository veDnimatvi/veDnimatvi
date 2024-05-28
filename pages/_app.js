import "../styles/globals.scss";
import Script from "next/script";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-H16MTVW4PF`}
      />

      <Script id="my-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-H16MTVW4PF');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
