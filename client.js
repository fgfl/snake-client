/**
 * Dec 4, 2019
 * Frederick Lee
 */

const net = require('net');

const onConnect = (conn) => {
  console.log('Successfully connected to the game server');
  const name = 'FFL'
  conn.write(`Name: ${name}`);
  // const moveInterval = setInterval(() => {
  //   conn.write('Move: up');
  // }, 50);
  // setTimeout(() => {
  //   clearInterval(moveInterval);
  // }, 500);
};

const connect = (ip, port) => {
  const conn = net.createConnection({
    host: ip,
    port: port
  });

  conn.setEncoding('utf8');

  conn.on('connect',() => onConnect(conn));
  conn.on('data', data => {
    if (data === 'you ded cuz you idled\n') 
      console.log(data);
  });

  return conn;
};

module.exports = {connect};