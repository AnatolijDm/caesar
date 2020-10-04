const fs = require('fs');
const path = require('path');
const com = require('commander'),
{prompt} = require('inquirer'),
chalk = require('chalk');

const inputFile = path.join(__dirname, 'src', 'input.txt');
const outputFile = path.join(__dirname, 'src', 'output.txt');

let inputData;

com.option('-w, --write').option('-s, --shift').alias('-w').action(() => {
    process.stdin.on('data', function(data) {
        inputData = data.toString();

        if(process.argv[1] !== '--write' || process.argv[1] !== '-w') {
            process.stderr(console.error(error));
        } else if(process.argv[3] !== '--shift' || process.argv[1] !== '-s') {
            process.stderr(console.error(error));
        }

        fs.appendFile(inputFile, data, err => {
            if (err) {
                console.log(chalk.red("Can't insert data to input.txt"));
            }
        })

        if (process.argv[3] === 'encode') {
            encoding(process.argv[5]);
        } else if (process.argv[3] === 'decode') {
            decoding(process.argv[5]);
        }
 
    })

})

com.parse(process.argv);

let strOutputEn = '\n';
let strOutputDe = '\n';

function dataEncoded(data, shift) {
    data.toString().split('');
    let arr = [];
    for (let i = 0; i < data.length; i++) {
       let result = data[i].charCodeAt(0)
       arr.push(result);
    }
    for (let i = 0; i < arr.length; i++) {
        strOutputEn = strOutputEn + String.fromCharCode(+arr[i] + +shift);
    }
    return strOutputEn;
}

function dataDecoded(data, shift) {
    data.toString().split('');
    let arr = [];
    for (let i = 0; i < data.length; i++) {
       let result = data[i].charCodeAt(0)
       arr.push(result);
    }
    for (let i = 0; i < arr.length; i++) {
        strOutputDe = strOutputDe + String.fromCharCode(+arr[i] - +shift);
    }
    return strOutputDe;
}

function encoding(shift) {
        dataEncoded(inputData, shift);
        fs.appendFile(outputFile, strOutputEn, err => {
            if (err) {
                console.log("Can't create output.txt");
            }
            console.log(strOutputEn);
        })
    }

function decoding(shift) {
        dataDecoded(inputData, shift);
        fs.appendFile(outputFile, strOutputDe, err => {
            if (err) {
                console.log("Can't create output.txt");
            }
            console.log(strOutputDe);
        })

    }
