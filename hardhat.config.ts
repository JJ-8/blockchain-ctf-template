import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"

import { HardhatUserConfig, task } from "hardhat/config"
import dotenv from "dotenv"
import { ensureEnvVar } from "./test/utils"

dotenv.config()

let config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    ctf: {
      url: ensureEnvVar("RPC_URL"),
      accounts: [
        // ensureEnvVar("PRIVATE_KEY"),
      ],
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./build/artifacts",
    cache: "./build/cache",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.15",
      },
    ],
  },
  typechain: {
    outDir: "./build/typechain/",
    target: "ethers-v6",
  },
}

export default config
