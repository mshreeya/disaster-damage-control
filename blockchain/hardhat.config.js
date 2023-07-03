/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy")
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.8.7",
      },
    ],

    // ...
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },},
    defaultNetwork:"goreli",

    networks: {
      localhost: {
        chainId: 31337,
      },
      goreli:{
        chainId:5,
        url: "https://rpc.ankr.com/eth_goerli",
        accounts:[process.env.PRIVATE_KEY],
      },
      hardhat: {
        chainId: 31337,
      },

    },

    
   
  
  namedAccounts:{
    deployer:{
      default:0,
    },
    players:{
      default:1,
    },
  }
};
