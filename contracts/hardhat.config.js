require('@nomicfoundation/hardhat-toolbox');

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `${process.env.MUMBAI_URL}`,
      accounts: [`${process.env.Metamask}`],
    },
  },
};
