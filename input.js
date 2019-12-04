/**
 * Dec 4, 2019
 * Frederick Lee
 */
// stores the active TCP connection object.
 let connection;
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
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = key => {
  if (key === '\u0003')
    process.exit();
  if (cmmds[key]) {
    connection.write(cmmds[key]);
  }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput); 

  return stdin;
};

module.exports = {setupInput}