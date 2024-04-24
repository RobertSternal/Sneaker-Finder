import { AppProps } from 'next/app';
import "@/app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;