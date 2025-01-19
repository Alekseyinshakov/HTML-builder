const fs = require("fs");
const path = require("path");
const { stdin, exit } = process;

fs.writeFile(path.join(__dirname, "text.txt"),
  "",
  (err) => {

  },)

console.log('Hello! Type your text and press enter to add text to .txt file');

stdin.on("data", (data) => {

  if (data.toString().trim() === 'exit') {
    sayBye();
    exit();
  } 

  fs.appendFile(
    path.join(__dirname, "text.txt"),
    data,
    (err) => {

    }
  );
});

process.on('SIGINT', (code) => {
  sayBye();
})

function sayBye() {
  console.log('Goodbye my dear friend');
  exit();
}