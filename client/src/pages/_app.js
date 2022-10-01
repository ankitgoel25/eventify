import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.scss';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
