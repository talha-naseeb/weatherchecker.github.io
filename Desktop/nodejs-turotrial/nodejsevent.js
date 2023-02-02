// import { EventEmitter } from 'node:events';
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Moooth', () => {
  console.log('jb niklny lagay to washroom bhag jao');

  setTimeout(() => {
    console.log('jb niklny lagay to washroom bhag jao')},
    3000);
});
console.log("the script is running");
console.log("the script is still running");
myEmitter.emit("Moooth");
module.exports = {myEmitter}; 

