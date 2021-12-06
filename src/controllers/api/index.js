const readFromFile = require("../../util");
const writeToFile = require("../../util");

const getAppNotes = (req, res) => {
  const id = req.params.id;
  let found;
  notes.forEach((i) => {
    if (id == i.id) {
      found = i;
      return res.json(i);
    }
  });
  return res.json(false);
};

const postAppNotes = (req, res) => {
  const newNote = req.body;
  if (notes.length === 0) {
    newNote.id = 1;
  } else {
    newNote.id = notes[notes.length - 1].id + 1;
  }

  notes.push(newNote);

  let jsonNotes = JSON.stringify(notes);
  fs.writeFile(
    "./db/db.json",
    (jsonNotes = (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    })
  );
  res.json(true);
};

const deleteAppNotes = (req, res) => {
  const id = req.params.id;
  let found;
  notes.forEach((i, index) => {
    if (id == i.id) {
      notes.splice(index, 1);
      const notesCopy = notes.slice();
      let jsonNotes = JSON.stringify(notesCopy);
      fs.writeFile(
        "../../../db/db.json",
        (jsonNotes = (err) => {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
        })
      );
    }
  });
  res.json(true);
};

module.exports = {
  getAppNotes,
  postAppNotes,
  deleteAppNotes,
};
