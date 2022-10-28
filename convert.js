//use node to convert names.txt to an array
const fs = require("fs");
const path = require("path");

const names = fs.readFileSync(path.join(__dirname, "names.txt"), "utf8");

let namesArray = names.split("\n");

//trim every name
namesArray = namesArray.map((name) => name.trim());

fs.writeFileSync(
    path.join(__dirname, "namesArray.js"),
    `export default ${JSON.stringify(namesArray)}`
);
