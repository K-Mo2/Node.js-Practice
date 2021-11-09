const fs = require("fs");

fs.writeFileSync("notes.txt", "This is writen by node\n");

fs.appendFileSync("notes.txt", "This is line is appended by node");
