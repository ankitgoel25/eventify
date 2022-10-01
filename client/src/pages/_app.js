import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.scss';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <ThirdwebProvider
        desiredChainId={ChainId.Mumbai}
        supportedChains={[ChainId.Mumbai]}
        chainRpc={{
          [ChainId.Mumbai]:
            'https://tiniest-warmhearted-dream.matic-testnet.discover.quiknode.pro/c1e62a6e5e16da760ccfcd79513105f8a1a3253f/',
        }}
      >
        <ChakraProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
