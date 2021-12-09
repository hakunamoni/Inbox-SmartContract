// // assert is used for making assertions about tests. if value 'false', stop running script
// const assert = require('assert');
// // serve as a local Ethereum test network
// const ganache = require('ganache-cli');
// // require/import a constructor function, used to create instance of web3 library
// const Web3 = require('web3');
// // create the instance of "Web3" and tell this intance to connect to local test network using "ganache.provider()". this can be replaced with other network
// const web3 = new Web3(ganache.provider());
// // get 'interface', 'bytecode' values from compile.js result - Inbox compiled data by solidity compiler
// const {interface, bytecode} = require('../compile');

// let accounts;
// let inbox;

// beforeEach(async () => {
//     // Get a list of all accounts
//     accounts = await web3.eth.getAccounts();

//     // Use one of those accounts to deploy the contract
//     inbox = await new web3.eth.Contract(JSON.parse(interface))
//         .deploy({ data: bytecode, arguments:['Intial message to inbox sol constructor']})
//         .send({ from: accounts[0], gas: '1000000'});
// });

// describe('For Inbox', () => {
//     it('deploy a contract', () => {
//         // console.log(inbox);
//         // confirm if the contract is deployed to the local ganache test network
//         assert.ok(inbox.options.address);
//         console.log(inbox.options.address);
//     });
// });