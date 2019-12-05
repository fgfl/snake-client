/*Dec 4, 2019
  Frderick Lee
*/

const {connect} = require('./client');
const {setupInput} = require('./input');
const {IP, PORT} = require('./constants');

/**
 * Establishes connection with the game server
 */

console.log('Connecting ....');
const client = connect(IP, PORT);
const userIO = setupInput(client);
