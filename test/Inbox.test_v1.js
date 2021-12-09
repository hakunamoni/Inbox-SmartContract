// const assert = require('assert');
// // assert is used for making assertions about tests. if value 'false', stop running script
// const ganache = require('ganache-cli');
// // serve as a local Ethereum test network
// const Web3 = require('web3');
// // require/import a constructor function, used to create instance of web3 library
// const web3 = new Web3(ganache.provider());
// // create the instance of "Web3" and tell this intance to connect to local test network using "ganache.provider()". this can be replaced with other network


// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// // describe('For Car', () => {
// //     it('can park', () => {
// //         const car = new Car();
// //         assert.equal(car.park(), 'stopped');
// //     });

// //     it('can drive', () => {
// //         const car = new Car();
// //         assert.equal(car.drive(), 'vwroom');
// //     });
// // });

// let car;

// beforeEach(() => {
//     // console.log('a');
//     car = new Car();
// });

// describe('For Car', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });