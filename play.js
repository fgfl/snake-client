/*Dec 4, 2019
  Frderick Lee
*/

const net = require('net');

/**
 * Establishes connection with the game server
 */

const serverIP = '192.168.88.149';
const serverPort = 50541;

const connect = () => {
  const conn = net.createConnection({
    host: serverIP,
    port: serverPort
  });

  conn.setEncoding('utf8');
  conn.on('data', data => {
    if (data === 'you ded cuz you idled\n') 
      console.log(data);
  });

  return conn;
};

console.log('Connecting ....');
const client = connect();
