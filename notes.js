const fs = require("fs");

const getNotes = function (notes) {
  console.log(notes);
  return notes;
};

const addNotes = function (title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.some((note) => note.title === title);

  if (duplicateNote) {
    console.log("Note title is taken");
    return;
  } else {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Note added");
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
module.exports = { getNotes, addNotes };
