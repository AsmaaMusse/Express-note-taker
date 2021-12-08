const { readFromFile, writeToFile } = require("../../util");
// const  = require("../../util");

const getAppNotes = (req, res) => {
  // readFromFile and get notes
  const notes = readFromFile();
  // parse the notes data
  console.log(notes);
  // send the json response
  res.json(notes);
};

const postAppNotes = (req, res) => {
  // get the data from req body

  // console.log(req.body);
  console.log(req.body.title);
  // read notes from file
  // parse notes
  // push new note to array
  // write to file
  const notes = readFromFile();
  // send response
};

const deleteAppNotes = (req, res) => {
  // get the id of the note to delete
  // read all notes from file
  // filter the notes and remove the note
  // write the notes to file
  // send response
};

module.exports = {
  getAppNotes,
  postAppNotes,
  deleteAppNotes,
};
