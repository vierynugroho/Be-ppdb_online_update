const router = require("express").Router();

const Major = require("../controllers/majorController")


router.get("/", Major.getAllMajors );
router.get("/:id", Major.getMajorById);
router.post("/", Major.createMajor);
router.patch("/:id", Major.updateMajor);
router.delete("/:id", Major.deleteMajor);

module.exports = router;
