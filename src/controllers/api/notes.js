const { readFromFile, writeToFile } = require("../../util");

const getAppNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../../db/db.json");
  const notes = readFromFile(filePath);
  res.json(notes);
};

const postAppNote = (req, res) => {
  try {
    // const note = readFromFile();
    // const { title, text } = req.body;
    // const id = uuidv4();
    // const newNote = { title, text, id };
    // writeToFile("db, [newNote, ...noteData]");
    // res.json(newNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:postAppNotes" });
  }
};

const deleteAppNoteById = (req, res) => {
  try {
    // const { id } = req.params;
    // const deleteNote = readFromFile().filter((note) => note.id !== id);
    // writeToFile("db", deleteNote);
    // res.status(200).json({ message: "your note has been delete" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:deleteAppNotes" });
  }
};

module.exports = {
  getAppNotes,
  postAppNote,
  deleteAppNoteById,
};
