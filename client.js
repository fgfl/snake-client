/**
 * Dec 4, 2019
 * Frederick Lee
 */

const net = require('net');
const {NAME, SUCCESS_CONNECT_MSG, SERVER_IDLE_MSG} = require('./constants');
let {direction} = require('./input');

const onConnect = (conn) => {
  console.log(SUCCESS_CONNECT_MSG);
  conn.write(`Name: ${NAME}`);
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
    if (data === SERVER_IDLE_MSG) 
      console.log(data);
  });

  return conn;
};

module.exports = {connect};