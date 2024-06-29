const { ethers } = require("hardhat");
require("dotenv").config();

const ElectionContractABIX = require("/home/zaheerkhan/Desktop/Untitled Folder 14/VottingApp/artifacts/contracts/Election.sol/Election.json");
const electionContractabi = ElectionContractABIX.abi;
const electionContractAddress = "0xfD7fb2a938Bb2E4a266E90c30a30717f98269c8F";
const candidateID = 1; 
const node = "http://127.0.0.1:7545";
const provider = new ethers.JsonRpcProvider(node); 

const contract = new ethers.Contract(electionContractAddress, electionContractabi, provider);

const main = async () => {
    try {
       
        const view = await contract.getCandidate(candidateID);
        console.log("Candidate data:", view);
    } catch (error) {
        console.error("Error fetching candidate data:", error);
    }
};

main();
