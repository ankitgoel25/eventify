import eventsJSON from './Events.json';
import { ethers } from 'ethers';

const connectContract = () => {
  //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const contractABI = eventsJSON.abi;
  let eventsContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      eventsContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer,
      ); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log('ERROR:', error);
  }
  return eventsContract;
};

export default connectContract;
