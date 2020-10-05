const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

fs.mkdir(path.join(__dirname, 'src'), err => {
    if (err) {
        console.log(chalk.red("Can't create the folder"));
    }
    console.log(chalk.blue('Create the folder src'));
})

const inputFile = path.join(__dirname, 'src', 'input.txt');
const outputFile = path.join(__dirname, 'src', 'output.txt');

fs.appendFile(inputFile, '', err => {
    if (err) {
        console.log(chalk.red("Can't create the file"));
    }
    console.log(chalk.green('Create the file input.txt'));
})

fs.appendFile(outputFile, '', err => {
    if (err) {
        console.log(chalk.red("Can't create the file"));
    }
    console.log(chalk.green('Create the file output.txt'));
})