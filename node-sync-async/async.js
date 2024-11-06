const fs = require("fs");

console.log("1");

fs.readFile("text.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("file :", data);
});
console.log("2");
