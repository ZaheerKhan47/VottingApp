// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.24;

contract Election {
    // State variables
    address public owner;  //0x47
    uint public candidateCount = 0;
    
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates; // database
    mapping(address => bool) public voters;
    mapping(address => bool) public registeredVoter;

    // Modifiers

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Functions

    // Voter Registeration 
     function registerVoter(address _voter) public onlyOwner {
        require(registeredVoter[_voter]==false,"Already registered");
        registeredVoter[_voter]=true;
    }


    // Add a new candidate (only by the owner)
    function addCandidate(string memory _name) public onlyOwner {
        candidateCount++; // 2
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }

    // Vote for a candidate
    function vote(uint _candidateId) public  {
        require(registeredVoter[msg.sender],"You are not eligible to vote ask admin to firs register you ");
        require(!voters[msg.sender], "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate ID");
        
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
    }

    // Get details of a specific candidate
    function getCandidate(uint _candidateId) public view returns (uint, string memory, uint) {
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate ID");
        
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.id, candidate.name, candidate.voteCount);
    }

    // Get details of all candidates
    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidateCount);
        
        for (uint i = 1; i <= candidateCount; i++) {
            allCandidates[i - 1] = candidates[i];
        }
        
        return allCandidates;
    }
}
