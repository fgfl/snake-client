/**
 * Dec 4, 2019
 * Frederick Lee
 */

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const cmmds = {
  up: "Move: up"
};

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
};

module.exports = {setupInput}