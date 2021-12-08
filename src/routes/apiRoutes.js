const { Router } = require("express");

const {
  getAppNotes,
  postAppNotes,
  deleteAppNotes,
} = require("../controllers/api");

const router = Router();

router.get("/notes", getAppNotes);
router.post("/notes", postAppNotes);
router.delete("/notes/:id", deleteAppNotes);

module.exports = router;
