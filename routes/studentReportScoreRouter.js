const router = require("express").Router();
const studentReportScore = require("../controllers/studentReportScoreController")

router.get("/", studentReportScore.getAllReportScores);
router.get("/:id", studentReportScore.getReportScoreById);
router.post("/", studentReportScore.createReportScore);
router.patch("/:id", studentReportScore.updateReportScore);
router.delete("/:id", studentReportScore.deleteReportScore);


module.exports = router;