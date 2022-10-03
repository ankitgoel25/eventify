import { Web3Storage } from 'web3.storage';

function makeStorageClient() {
  return new Web3Storage({ token: process.env.NEXT_PUBLIC_STORAGE_API });
}

const storeFiles = async (files) => {
  const client = makeStorageClient();
  const cid = await client.put([files]);
  console.log('stored files with cid:', cid);
  return cid;
};

export default storeFiles;
