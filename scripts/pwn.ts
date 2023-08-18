import dotenv from "dotenv"
import { ethers, network } from "hardhat"
import { Setup } from "../build/typechain"
import { ensureEnvVar } from "../test/utils"

dotenv.config()

async function main() {
    // pre-checks for sanity
  if ((await ethers.getSigners()).length == 0) {
    console.log(`\x1b[41m[!]\x1b[0m No accounts available, please check the accounts in hardhat.config.ts`)
    return false;
  }

  // ***********************************************************

  // Load the first signer
  // Under hardhat network, this will be pre-loaded by hardhat
  // If running against CTF network, it is the first account in the list in hardhat.config.ts
  const account = (await ethers.getSigners())[0]
  console.log(`account: ${account.address}`)
  // Note: when running on local, the second account will be used for deploying the contract to
  // simulate the CTF scenario where someone else deploys the contract (see below)

  // ***********************************************************
  // Deploy any setup contracts and store ethers.js contract instances

  let setup: Setup

  // Load the contract from an address if we are running against CTF network
  // If not, deploy it for testing locally (hardhat network)
  if (network.name == "ctf") {
    setup = await ethers.getContractAt("Setup", ensureEnvVar("CONTRACT_ADDRESS"))
  } else {
    setup = await (await ethers.getContractFactory("Setup", { signer: (await ethers.getSigners())[1] })).deploy()
  }
  await setup.waitForDeployment();

  // ***********************************************************
  // Do stuff here
  console.log(await setup.isSolved())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
