const yargs = require("yargs");
const fs = require("fs");
const notes = require("./notes.js");

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
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "removing a note",
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "Listing notes",
  handler: function () {
    notes.listingNotes();
  },
});

yargs.command({
  command: "read",
  description: "Reading notes",
  handler: function (argv) {
    notes.readingNotes(argv.title);
  },
});

console.log(yargs.argv);
