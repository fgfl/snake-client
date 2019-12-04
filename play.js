/*Dec 4, 2019
  Frderick Lee
*/

const {connect} = require('./client');

/**
 * Establishes connection with the game server
 */

const serverIP = '192.168.88.149';
const serverPort = 50541;
const name = 'FFL';

const cmmds = {
  up: "Move: up"
}

console.log('Connecting ....');
const client = connect(serverIP, serverPort);