import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from '../components/Nav/Nav';
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
