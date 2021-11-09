const yargs = require("yargs");

yargs.command({
  command: "add",
  description: "adding a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title:" + argv.title, "\nBody:" + argv.body);
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
