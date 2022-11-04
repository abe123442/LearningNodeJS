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
    let content = `${name} ${lastName}`;
    fs.writeFile('/Users/abraham/Documents/node-programs/first-app/test.txt', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
    rl.close();

  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

// When done reading prompt, exit program 
rl.on('close', () => process.exit(0));