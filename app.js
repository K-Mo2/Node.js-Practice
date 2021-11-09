const yargs = require("yargs");

console.log(process.argv);

yargs.version("1.1.0");

yargs.command({
  command: "add",
  description: "adding a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

yargs.command({
  command: "remove",
  description: "removing a note",
  handler: function () {
    console.log("Removing a note");
  },
});

yargs.command({
  command: "list",
  description: "Listing notes",
  handler: function () {
    console.log("Listing notes");
  },
});

yargs.command({
  command: "read",
  description: "Reading notes",
  handler: function () {
    console.log("Reading notes");
  },
});

console.log(yargs.argv);
