/*Dec 4, 2019
  Frderick Lee
*/

const {connect} = require('./client');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = key => {
  if (key === '\u0003')
    process.exit();
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput); 

  return stdin;
}

/**
 * Establishes connection with the game server
 */

const serverIP = '192.168.88.149';
const serverPort = 50541;

const cmmds = {
  up: "Move: up"
}

console.log('Connecting ....');
const client = connect(serverIP, serverPort);
const userIO = setupInput();
