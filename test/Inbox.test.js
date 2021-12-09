// assert is used for making assertions about tests. if value 'false', stop running script
const assert = require('assert');
// serve as a local Ethereum test network
const ganache = require('ganache-cli');
// require/import a constructor function, used to create instance of web3 library
const Web3 = require('web3');
// create the instance of "Web3" and tell this intance to connect to local test network using "ganache.provider()". this can be replaced with other network
const web3 = new Web3(ganache.provider());
// get 'interface', 'bytecode' values from compile.js result - Inbox compiled data by solidity compiler
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Intial message to inbox sol constructor';

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the 
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments:[INITIAL_STRING]})
        .send({ from: accounts[0], gas: '1000000'});
    // above is deploying to a local ganache test network with unlocked accounts
    // later, in deploy.js, will see the real network where we have to somehow get an account that has some amount of ether in it already
});

describe('For Inbox', () => {
    it('deploy a contract', () => {
        // console.log(inbox);
        // confirm if the contract is deployed to the local ganache test network
        assert.ok(inbox.options.address);
        // console.log(inbox.options.address);
    });

    it('has a default value', async () => {
        // message() : 'Calling' function. () is to customize the list of arguments that's being passed to the function (as defined in inbox.sol). i.e. setMessage("wewrewrw")
        // call(): customize exactly how that function gets called
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING);
    });

    it('can change the message', async () => {
        // setMessage().xyz(): 1st part: initial setup, 2nd part: send this transaction out to the network
        // send(from: xxx): indicates the person who pay for sending this change into the network
        await inbox.methods.setMessage('bye').send({from: accounts[0]});
        // const result = await inbox.methods.setMessage('bye').send({from: accounts[0]});
        // console.log(result);
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});