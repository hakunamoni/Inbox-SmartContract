const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'twenty coin mansion easily horn need absent vessel aware roast two very',
    'https://ropsten.infura.io/v3/c303c2e21a314ab6abd7a092e39c151c'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments:['Hi, Rinkeby Contract']})
        // .deploy({ data: '0x' + bytecode, arguments:['Hi, Rinkeby Contract']})
        .send({ from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to', result.options.address);
};
deploy();
// here, deploy function is only just to call async() function and it doesn't have no other meaning