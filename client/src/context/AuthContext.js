import React, { useState, createContext } from 'react';
import { Web3Auth } from '@web3auth/web3auth';
import RPC from './web3RPC';

const AuthContext = createContext();
const clientId =
  'BMiv6BL-83PmB58JS9nUavMthu9aICbF17qYgBFhYCsOdLITy7D7lw601EWjnBQpmYxF1pu0cRxFM24Dq0go9Vk';

const AuthProvider = ({ children }) => {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: 'eip155',
            chainId: '0x13881',
            rpcTarget:
              'https://tiniest-warmhearted-dream.matic-testnet.discover.quiknode.pro/c1e62a6e5e16da760ccfcd79513105f8a1a3253f/',
            displayName: 'Polygon Mainnet',
            blockExplorer: 'https://mumbai.polygonscan.com/',
            ticker: 'MATIC',
            tickerName: 'Matic',
          },
        });

        setWeb3auth(web3auth);

        await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const user = await web3auth.getUserInfo();
    return user;
  };

  const logout = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getAccounts = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    return address;
  };

  const getBalance = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    return balance;
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    return receipt;
  };

  const signMessage = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    return signedMessage;
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    return privateKey;
  };

  const contextProps = {
    login,
    getUserInfo,
    logout,
    getAccounts,
    getBalance,
    sendTransaction,
    signMessage,
    getPrivateKey,
  };

  return (
    <AuthProvider.Provider value={contextProps}>
      {children}
    </AuthProvider.Provider>
  );
};

export { AuthContext, AuthProvider };
