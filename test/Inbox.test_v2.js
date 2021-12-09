// const assert = require('assert');
// // assert is used for making assertions about tests. if value 'false', stop running script
// const ganache = require('ganache-cli');
// // serve as a local Ethereum test network
// const Web3 = require('web3');
// // require/import a constructor function, used to create instance of web3 library
// const web3 = new Web3(ganache.provider());
// // create the instance of "Web3" and tell this intance to connect to local test network using "ganache.provider()". this can be replaced with other network

// // beforeEach(() => {
// //     // Get a list of all accounts
// //     // web3.eth.getAccounts() is promise function. fetchedAccounts : resolved contract accounts
// //     web3.eth.getAccounts().then(fetchedAccounts => {
// //         console.log(fetchedAccounts);
// //     });

// //     // Use one of those accounts to deploy the contract
// // });

// // describe('For Inbox', () => {
// //     it('deploy a contract', () => {});
// // });

// let accounts;

// beforeEach(async () => {
//     // Get a list of all accounts
//     accounts = await web3.eth.getAccounts();

//     // Use one of those accounts to deploy the contract
// });

// describe('For Inbox', () => {
//     it('deploy a contract', () => {
//         console.log(accounts);
//     });
// });