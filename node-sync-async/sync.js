const fs = require("fs");

console.log("1");

const res = fs.readFileSync("text.txt", "utf-8");
console.log("file :", res);

console.log("2");


