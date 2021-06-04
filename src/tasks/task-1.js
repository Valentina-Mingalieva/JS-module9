// 1. Create a new file and add to this file any text. Read the file and return the text.

const fs = require("fs");
const path = require("path"); // "type": "commonjs"

/* import fs from "fs"; // "type": "module"
import path from "path"; */

const fileName = "file.txt"; // создаст файл в корне
// const fileName = path.join(__dirname, "file.txt"); // создаст файл в папке tasks

/* export */ const writeFile = (text) => {
    fs.writeFileSync(fileName, text, {
        encoding: "utf-8",
    });
}

/* export */ const readFile = () => {
    return fs.readFileSync(fileName, {
        encoding: "utf-8",
    });
}

console.log(fileName);
// console.log(__dirname);

module.exports = { // not needed by "type": "module"
    writeFile,
    readFile,
}