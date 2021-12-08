const getAppNotes = require("../controllers/api/index");
const postAppNotes = require("../controllers/api/index");
const deleteAppNotes = require("../controllers/api/index");

const { Routers } = require("express");
const router = Routers();

router.get("/notes", getAppNotes);
router.post("/notes", postAppNotes);
router.delete("/notes:id", deleteAppNotes);

module.exports = router;
