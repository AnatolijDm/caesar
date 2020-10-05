# caesar
Node.js course, task 1

To start use the app you need:
1. Download and install node.js from https://nodejs.org/en/
2. Type in terminal: node start.js. The input.txt and output.txt files will create in src folder.
3. There are two solutions in this app:
    a. If you need to type in console the text, you want to code, type in terminal: node ceasar-cli -w (or --write) encode/decode -s (or --shift) number (how many times the symbols will change according to alphabet);
    b. If  you need to code the text from any text file to some else text file, type in terminal: node ceasar-cli-files -w (or --write) encode/decode -s (or --shift) number (how many times the symbols will change according to alphabet) -i (or --input) directory (the directory of input file) -o (or --output) directory (directory of output file).

Some examples for you to test the program:
a. Type in terminal: node ceasar-cli -w encode -s 2;
    Now type some text, for example TEXT. (This text will be saved in "./input.txt" file).
    You wil get the VGZV text. (This text will be saved in "./output.txt" file).
    To go out from console and close up the app press Ctr+C;

    If  you want to decode this text, type in terminal: node ceasar-cli -w decode -s 2;
    After that type VGZV text. (This text will be saved in "./input.txt" file).
    You wil get the TEXT text. (This text will be saved in "./output.txt" file).

b. Type in terminal: node ceasar-cli-files -w encode -s 2 -i "./input.txt" -o "./output.txt"
    If the input.txt file have inside TEXT, you wil get the VGZV in output.txt file.

    If  you want to decode this text from output.txt to input.txt, type in terminal: node ceasar-cli-files -w decode -s 2 -i "./output.txt" -o "./input.txt"
    If the output.txt file have inside VGZV, you wil get the TEXT in input.txt file.