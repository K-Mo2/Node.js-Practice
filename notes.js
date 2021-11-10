const fs = require("fs");
const chalk = require("chalk");

const addNotes = function (title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(chalk.red.inverse("Note title is taken"));
    return;
  } else {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added"));
  }
};

const saveNotes = function (note) {
  const noteJSON = JSON.stringify(note);
  fs.writeFileSync("notes.json", noteJSON);
};

const loadNotes = function () {
  try {
    const notes = fs.readFileSync("notes.json").toString();
    const notesObj = JSON.parse(notes);
    return notesObj;
  } catch (error) {
    return [];
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  try {
    const notesToKeep = notes.filter((note) => note.title !== title);
    notesToKeep.length < notes.length
      ? console.log(chalk.green.inverse("Note has been removed"))
      : console.log(chalk.red.inverse("Note not found"));
    saveNotes(notesToKeep);
  } catch (error) {
    console.log(chalk.red.inverse("Title doesn't exist"));
  }
};

const listingNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse.underline("Your Notes"));
  notes.forEach((note) => {
    console.log(chalk.magentaBright.inverse(note.title, note.body));
  });
};

const readingNotes = (title) => {
  const notes = loadNotes();

  try {
    const searchedNote = notes.find((note) => note.title === title);
    console.log(
      chalk.magentaBright.inverse(
        `Title: ${searchedNote.title},\nBody: ${searchedNote.body}`
      )
    );
  } catch (error) {
    console.log(chalk.redBright.inverse("No note found"));
  }
};
module.exports = {
  addNotes,
  removeNotes,
  listingNotes,
  readingNotes,
};
