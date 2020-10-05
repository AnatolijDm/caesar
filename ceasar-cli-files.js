'use strict'

const fs = require('fs');
const path = require('path');
const com = require('commander');
const chalk = require('chalk');

com.option('-w, --write').option('-s, --shift').option('-i, --input').option('-o, --output').action(() => {
    const inputFile = path.join(__dirname, process.argv[7]);
    const outputFile = path.join(__dirname, process.argv[9]);

    fs.readFile(inputFile, 'utf-8', (err, content) => {
        if (err) {
            console.log(chalk.red("Can't read the input file"));
        }
        let inputData = content.toString();
        
        let num;
        if (typeof(+process.argv[5]) === 'number' && (+process.argv[5]) >= 0) {
            num = process.argv[5];
        } else {
            process.exit();
        }

        if (process.argv[3] === 'encode') {
            encoding(inputData, num, outputFile);
        } else if (process.argv[3] === 'decode') {
            decoding(inputData, num, outputFile);
        } else {
              process.exit();
        }
     })
     process.on('exit', function(){
        console.log(chalk.green('The process was successfully'));
     })
})

com.parse(process.argv);

function dataEncoded(data, shift) {
    let strOutputEn = '';
    data.toString().split('');
    let arr = [];
    for (let i = 0; i < data.length; i++) {
       let result = data[i].charCodeAt(0)
       arr.push(result);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 64 && arr[i] < 91) {
            strOutputEncodeUpper(i);
        } else if (arr[i] > 96 && arr[i] < 123) {
            strOutputEncodeLower(i);
        } else {
            strOutputEn = strOutputEn + String.fromCharCode(+arr[i]);
        }
    }
        function strOutputEncodeUpper(i) {
            if ((arr[i] + +shift) > 90) {
                strOutputEn = strOutputEn + String.fromCharCode(+arr[i] - 26 + +shift);
            } else if ((arr[i] + +shift) > 64 && (arr[i] + +shift) < 91) {
                strOutputEn = strOutputEn + String.fromCharCode(+arr[i] + +shift);
            }
        }
        function strOutputEncodeLower(i) {
            if ((arr[i] + +shift) > 122) {
                strOutputEn = strOutputEn + String.fromCharCode(+arr[i] - 26 + +shift);
            }else if ((arr[i] + +shift) > 96 && (arr[i] + +shift) < 123) {
                strOutputEn = strOutputEn + String.fromCharCode(+arr[i] + +shift);
            }
        }
    return strOutputEn;
}

function dataDecoded(data, shift) {
    let strOutputDe = '';
    data.toString().split('');
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        let result = data[i].charCodeAt(0)
        arr.push(result);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 64 && arr[i] < 91) {
            strOutputDecodeUpper(i);
        } else  if (arr[i] > 96 && arr[i] < 123) {
            strOutputDecodeLower(i);
        } else 
        strOutputDe = strOutputDe + String.fromCharCode(+arr[i]);
    }
    function strOutputDecodeUpper(i) {
        if ((arr[i] - +shift) < 65) {
            strOutputDe = strOutputDe + String.fromCharCode(+arr[i] + 26 - +shift);
        } else if ((arr[i] - +shift) > 64 && (arr[i] - +shift) < 91) {
            strOutputDe = strOutputDe + String.fromCharCode(+arr[i] - +shift);
        }
    }
    function strOutputDecodeLower(i) {
        if ((arr[i] - +shift) < 97) {
            strOutputDe = strOutputDe + String.fromCharCode(+arr[i] + 26 - +shift);
        } if ((arr[i] - +shift) > 96 && (arr[i] - +shift) < 123) {
            strOutputDe = strOutputDe + String.fromCharCode(+arr[i] - +shift);
        }
    }
    return strOutputDe;
}

function encoding(data, shift, outputFile) {
    let strOutputEn = dataEncoded(data, shift);
        fs.appendFile(outputFile, strOutputEn, err => {
            if (err) {
                console.log("Can't create output.txt");
            }
            console.log(chalk.blue(strOutputEn));
        })
    }

function decoding(data, shift, outputFile) {
        let strOutputDe = dataDecoded(data, shift);
        fs.appendFile(outputFile, strOutputDe, err => {
            if (err) {
                console.log("Can't create output.txt");
            }
            console.log(chalk.blue(strOutputDe));
        })
    }