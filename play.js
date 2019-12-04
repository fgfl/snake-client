/*Dec 4, 2019
  Frderick Lee
*/

const {connect} = require('./client');
const {setupInput} = require('./input');

/**
 * Establishes connection with the game server
 */

const serverIP = '192.168.88.149';
const serverPort = 50541;

console.log('Connecting ....');
const client = connect(serverIP, serverPort);
const userIO = setupInput(client);
