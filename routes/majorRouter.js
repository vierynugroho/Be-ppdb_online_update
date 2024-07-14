const router = require("express").Router();
const Major = require("../controllers/majorController")
const upload = require("../middlewares/upload");
const {createMajor, updateMajor} = require("../controllers/majorController")


router.get("/", Major.getAllMajors );
router.get("/:id", Major.getMajorById);
router.post("/", upload, createMajor);
router.patch("/:id", upload, updateMajor);
router.delete("/:id", Major.deleteMajor);

module.exports = router;
