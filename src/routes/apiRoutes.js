const { Router } = require("express");

const {
  getAppNotes,
  postAppNote,
  deleteAppNoteById,
} = require("../controllers/api/notes");

const router = Router();

router.get("/notes", getAppNotes);
router.post("/notes", postAppNote);
router.delete("/notes/:id", deleteAppNoteById);

module.exports = router;
