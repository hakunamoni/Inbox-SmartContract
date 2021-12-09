const path = require('path');
const fs = require('fs');
//to do solc compile with Inbox.sol, use "path", "fs" module to read the file as source one (utf8)
const solc = require('solc');
//solidity compile module

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// console.log(source);
// solc.compile(source, 1);
// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[':Inbox'];
//starting from compiler.js, export compiled contract info, and it able to go on next part, "test" & "deploy" from shared contract info
// console.log(module.exports);