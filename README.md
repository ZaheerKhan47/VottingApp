# VottingApp

## Description

VottingApp is a decentralized voting system built on the blockchain. It leverages smart contracts to manage the election process, ensuring transparency and security in voting.

## Installation

### Prerequisites

- **Node.js**: Ensure that Node.js is installed. You can download it [here](https://nodejs.org/).
- **Hardhat**: A development environment to compile and deploy smart contracts.
- **Ganache**: A personal Ethereum blockchain for development and testing.

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/vottingapp.git
   cd vottingapp
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Initialize Hardhat Environment**
   ```bash
   npx hardhat
   ```
   Follow the prompts to create a basic sample project.

4. **Write Smart Contract**
   - Create your smart contract in the `contracts` directory.

5. **Compile Smart Contract**
   ```bash
   npx hardhat compile
   ```

6. **Setup Ganache**
   - Start Ganache and create a workspace.
   - Note the RPC server URL and the network ID.

7. **Configure Hardhat for Ganache**
   - Update `hardhat.config.js` with Ganache network credentials.
   ```javascript
   module.exports = {
     networks: {
       ganache: {
         url: 'http://127.0.0.1:7545',
         accounts: [/* Add private keys from ganache */],
         chainID:5777
       }
     }
   };
   ```

8. **Deploy Smart Contract**
   ```bash
   npx hardhat run scripts/deployElection.js --network ganache
   ```

## Usage

### Admin Actions

1. **Deploy the Contract**
   ```bash
   npx hardhat run scripts/deployElection.js --network ganache
   ```

2. **Add Candidates**
   ```bash
    npx hardhat run  scripts/addCandidate.js --network ganache
   ```

3. **Register Voters**
   ```bash
  npx hardhat run scripts/voterRegisteration.js  --network ganache
   ```

### Voter Actions

1. **Cast Vote**
   ```bash
   node scripts/castVote.js
   ```

2. **View Votes**
   ```bash
   node scripts/viewVote.js
   ```

## Technologies Used

- **Hardhat**: Development environment for Ethereum smart contracts.
- **Ganache**: Personal blockchain for Ethereum development.
- **Node.js**: JavaScript runtime for building server-side applications.

### Configuration

- **Hardhat and Ganache Integration**: Configure Hardhat to use the Ganache network by updating the `hardhat.config.js` file with the Ganache RPC URL and account credentials.


