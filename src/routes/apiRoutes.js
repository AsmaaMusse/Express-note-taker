const getAppNotes = require("../controllers/api/index");
const postAppNotes = require("../controllers/api/index");
const deleteAppNotes = require("../controllers/api/index");

const { Routers } = require("express");
const router = Routers();

router.get("/public/notes", getAppNotes);
router.post("/public/notes", postAppNotes);
router.delete("/public/notes:id", deleteAppNotes);

module.exports = router;
