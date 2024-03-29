import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
  networks: {
    // localhost: {
    //   url: "http://127.0.0.1:8545",
    // },
    // bsctestnet: {
    //   url: "https://data-seed-prebsc-2-s2.binance.org:8545",
    //   chainId: 97,
    //   gasPrice: 30000000000,
    //   accounts: [process.env.PRI_KEY_2]
    // }
    // bscmainnet: {
    //   url: "https://bsc-dataseed.binance.org/",
    //   chainId: 56,
    //   gasPrice: 20000000000,
    //   accounts: [PRI_KEY]
    // },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   chainId: 137,
    //   gasPrice: 35000000000,
    //   accounts: [PRI_KEY]
    // },
    // avax: {
    //   url: "https://api.avax.network/ext/bc/C/rpc",
    //   chainId: 43114,
    //   gasPrice: 35000000000,
    //   accounts: [PRI_KEY]
    // },
    // avaxtestnet: {
    //   url: "https://rpc.ankr.com/avalanche_fuji",
    //   chainId: 43113,
    //   gasPrice: 35000000000,
    //   accounts: [PRI_KEY]
    // },
    // op: {
    //   url: "https://mainnet.optimism.io/",
    //   chainId: 10,
    //   gasPrice: 35000000000,
    //   accounts: [PRI_KEY]
    // },
    // okc: {
    //   url: "https://exchainrpc.okex.org",
    //   chainId: 66,
    //   gasPrice: 20000000000,
    //   accounts: [PRI_KEY]
    // },
    // ethtestnet: {
    //   url: "https://goerli.infura.io/v3/2b39db58fa29458284b7b477dc8ed6b4",
    //   chainId: 5,
    //   gasPrice: 20000000000,
    //   accounts: [PRI_KEY]
    // },
    // goerli: {
    //   url: "https://rpc.ankr.com/eth_goerli",
    //   chainId: 5,
    //   gasPrice: 10900000000,
    //   accounts: [process.env.PRI_KEY||""]
    // },
    // rinkeby: {
    //   url: 'https://rinkeby.infura.io/v3/2b39db58fa29458284b7b477dc8ed6b4',
    //   accounts: [PRI_KEY],      
    // }
    // local:{
    //     url: "http://localhost:1545",
    //     chainId: 789,
    //     gas: 2100000,
    //     gasPrice: 20000000000,
    //     //hardfork: "byzantium",
    //     accounts: [process.env.PRI_KEY_1||""]
    // } ,
    tomo_testnet: {
        url: "https://rpc-testnet.viction.xyz",
        chainId: 89,
        accounts: {
          mnemonic: process.env.MNEMONIC||""
        }

      }
  },
}




export default config;
