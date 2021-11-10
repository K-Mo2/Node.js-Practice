const fs = require("fs");

const getNotes = function (notes) {
  console.log(notes);
  return notes;
};

const addNotes = function (title, body) {
  const notes = fs.readFileSync("notes.json").toString();

  if (!notes) {
    const noteData = [{ title: title, body: body }];
    const noteJSON = JSON.stringify(noteData);
    fs.writeFileSync("notes.json", noteJSON);
  }

  if (notes) {
    const notesObj = JSON.parse(notes);

    const noteMatch = notesObj.some((note) => note.title === title);

    console.log(noteMatch);

    if (noteMatch) {
      console.log("This note already exists");
      return;
    }
    notesObj.push({
      title: title,
      body: body,
    });

    const noteObjJSON = JSON.stringify(notesObj);

    fs.writeFileSync("notes.json", noteObjJSON);
  }
};

module.exports = { getNotes, addNotes };
