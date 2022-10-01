import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.scss';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
