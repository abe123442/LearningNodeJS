// imports

const fs = require('fs');
const readline = require('readline');

// initialising

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
// const filepath = './'


// logic


// anonymous function that takes user input and writes to a file
(async() => {
  try {
    const name = await prompt("What's your name? ");
    const lastName = await prompt(`Hello ${name}, what's your last name? `);
    rl.close();

	let content = `${name} ${lastName}`;
    fs.writeFile(__dirname + '/test.txt', content, { flag: 'r+' }, err => {});
	rl.on('close', () => process.exit(0));

  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

// When done reading prompt, exit program 
