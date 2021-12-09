// const assert = require('assert');
// // assert is used for making assertions about tests. if value 'false', stop running script
// const ganache = require('ganache-cli');
// // serve as a local Ethereum test network
// const Web3 = require('web3');
// // require/import a constructor function, used to create instance of web3 library
// const web3 = new Web3(ganache.provider());
// // create the instance of "Web3" and tell this intance to connect to local test network using "ganache.provider()". this can be replaced with other network
// const {interface, bytecode} = require('../compile');
// // get 'interface', 'bytecode' values from compile.js result - Inbox compiled data by solidity compiler

// let accounts;
// let inbox;

// beforeEach(async () => {
//     // Get a list of all accounts
//     accounts = await web3.eth.getAccounts();

//     // Use one of those accounts to deploy the contract
//     // web3.eth.Contract : constructor
//     inbox = await new web3.eth.Contract(JSON.parse(interface))      // ?? parameter: JSON.parse(interface) ?? tell web3 that there's a type of contract and that has the interface // tell web3 about the methods an 'Inbox' contract has
//         .deploy({ data: bytecode, arguments:['Intial message to inbox sol constructor']})   // tell web3 the idea how it will be deployed to the network
//         .send({ from: accounts[0], gas: '1000000'});     // trigger the communcation from web3 off to the network // let web3 to send out a tx that creates this contract

//     // new web3.eth.Contract(JSON.parse(interface))
//     // .deploy({ data: bytecode, arguments:['Intial message to inbox sol constructor']})
//     // .send({ from: accounts[0], gas: '1000000'});
//     // the value, that is returned from all above, is a direct reference to the inbox contract
//     // above 'inbox' value is like the javascript representation of the contract. it's able to interact with this object and call functions on it that actually correspond to the contract (defined in Inbox.sol).
//     // in other words, above 'inbox' object represents what exists on the blockchain. it's able to call functions on it to interact directly with the contract that exists on the blockchain.
// });

// describe('For Inbox', () => {
//     it('deploy a contract', () => {
//         console.log(inbox);
//     });
// });