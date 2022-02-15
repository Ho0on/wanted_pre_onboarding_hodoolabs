import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import Banner from '../components/Banner/Banner';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hoodolabs</title>
      </Head>
      <GlobalStyle />
      <Nav />
      <Banner />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
