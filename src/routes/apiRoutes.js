const getAppNotes = require("../controllers/api/index");
const postAppNotes = require("../controllers/api/index");
const deleteAppNotes = require("../controllers/api/index");

const { Routers } = require("express");
const router = Routers();

router.get("/index", getAppNotes);
router.post("/index", postAppNotes);
router.delete("/index", deleteAppNotes);

module.exports = router;
