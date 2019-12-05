/**
 * Dec 4, 2019
 * Frederick Lee
 */

 const {
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_UP_KEY,
 } = require('./constants');

// stores the active TCP connection object.
 let connection;

// direction of out snake
let direction = '';
/**
 * "Move: up" - move up one square (unless facing down)
 * "Move: down" - move down one square (unless facing up)
 * "Move: left" - move left one square (unless facing right)
 * "Move: right" - move left one square (unless facing left)
 */
const cmmds = {
  w: "Move: up",
  d: "Move: right",
  s: "Move: down",
  a: "Move: left",

  y: "Say: Sup",
  u: "Say: Lets GOOO!",
  h: "Say: GG",
  i: "Say: Gobble gobble", 
  '': '',
};

const updateDirection = (key) => {
  switch(key) {
  case MOVE_UP_KEY:
    direction = direction !== MOVE_DOWN_KEY ? key : direction;
    break;
  case MOVE_DOWN_KEY:
    direction = direction !== MOVE_UP_KEY ? key : direction;
    break;
  case MOVE_LEFT_KEY:
    direction = direction !== MOVE_RIGHT_KEY ? key : direction;
    break;
  case MOVE_RIGHT_KEY:
    direction = direction !== MOVE_LEFT_KEY ? key : direction;
    break;
  default:
  }
};

const isMovementKey = (key) => {
  return key === 'w' || key === 'a' || key === 's' || key === 'd';
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = key => {
  if (key === '\u0003')
    process.exit();
  if (cmmds[key]) {
    if (isMovementKey(key)) {
      console.log('in movemnet')
      updateDirection(key);
    } else {
      connection.write(cmmds[key]);
    }
  }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput); 

  setInterval(() => {
    connection.write(cmmds[direction]);
  }, 50);

  console.log(
    cmmds
);
  return stdin;
};

module.exports = {
  setupInput,
  direction,
};