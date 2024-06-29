// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");



const electionContractAddress = "0xfD7fb2a938Bb2E4a266E90c30a30717f98269c8F"

const voterAddress = ""

async function main() {


    const contract = await ethers.getContractFactory("Election");

    const election = contract.attach(
        electionContractAddress
    );
  
    const trx = await election.registerVoter(voterAddress)
    await trx.wait()
    console.log("voter registered: ", trx) 

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});