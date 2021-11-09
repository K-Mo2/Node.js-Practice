// const getNotes = require("./notes");
const validator = require("validator");
// const fs = require("fs");
// fs.writeFileSync("notes.txt", "This is writen by node\n");

// fs.appendFileSync("notes.txt", "This is line is appended by node");

//  getNotes("these are my notes");

console.log(validator.isEmail("example@example.com"));
console.log(validator.isURL("www.exampleexample.com"));

console.log(validator.isEmail("exampleexample.com"));
console.log(validator.isURL("wwwexampleexample"));
