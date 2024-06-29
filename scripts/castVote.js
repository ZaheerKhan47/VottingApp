const {ethers} = require("hardhat");
require("dotenv").config();

const ElectionContractABIX = require("/home/zaheerkhan/Desktop/Untitled Folder 14/VottingApp/artifacts/contracts/Election.sol/Election.json")
const electionContractabi = ElectionContractABIX.abi;
const electionContractAddress = "0xfD7fb2a938Bb2E4a266E90c30a30717f98269c8F"
const candidateID = "1"
const node = "HTTP://127.0.0.1:7545"
const provider = new ethers.JsonRpcProvider(node);
const USER_PRIVKEY = "0x79ce2696b830d4bbd5932d8d51632183257843903467e91d562a4cea56b71470"

const deployerWallet = new ethers.Wallet(USER_PRIVKEY, provider)
const contract = new ethers.Contract(electionContractAddress, electionContractabi, provider);
const main = async () => {

    const connectWallet = contract.connect(deployerWallet);

    console.log("Casting Vote...........");

    const {gasPrice} = await provider.getFeeData()


    const trx2 = await connectWallet.vote(candidateID, {gasPrice: gasPrice});

    await trx2.wait()

    console.log("Vote Casted successfully", trx2)
}

main();

