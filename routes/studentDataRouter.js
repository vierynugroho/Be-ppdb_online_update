const router = require("express").Router();
const studentData = require("../controllers/studentDataController");

router.get("/", studentData.getStudentData);
router.get("/:id",studentData.getStudentDataById);
router.post("/", studentData.createStudentData);
router.patch("/:id",studentData.updateStudentData);
router.delete("/:id",studentData.deleteStudentData);

module.exports = router;