// require('dotenv').config();

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const Web3 = require('web3');
// const {interface, bytecode} = require('./compile');

// const provider = new HDWalletProvider(
//     process.env.MNEMONIC,
//     'https://ropsten.infura.io/v3/c303c2e21a314ab6abd7a092e39c151c'
// );
// // const provider = new HDWalletProvider({
// //     mnemonic: 'twenty coin mansion easily horn need absent vessel aware roast two very',
// //     providerOrUrl: 'https://rinkeby.infura.io/v3/0e69be76c2574b23bcbb0203958b09aa',
// //     chainId: 42
// // });

// After setting up the provider, we then fed that provider to our "Web3" instance, 
// and then we had a copy of "web3" that was pre-configured to connect to the Rinkeby network, and had alredy unlocked one of our accounts (which has some ether and could be used to deploy our contract).
// const web3 = new Web3(provider);

// const deploy = async () => {
//     const accounts = await web3.eth.getAccounts();

//     console.log('Attempting to deploy from account', accounts[0]);

//     const result = await new web3.eth.Contract(JSON.parse(interface))
//         .deploy({ data: bytecode, arguments:['Hi, Rinkeby Contract']})
//         // .deploy({ data: '0x' + bytecode, arguments:['Hi, Rinkeby Contract']})
//         .send({ from: accounts[0], gas: '1000000'});

//     console.log('Contract deployed to', result.options.address);
// };
// deploy();
// // here, deploy function is only just to call async() function and it doesn't have no other meaning