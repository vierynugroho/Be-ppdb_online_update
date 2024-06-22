const router = require("express").Router();

const majorRouter = require("./majorRouter");
const studentDataRouter = require("./studentDataRouter");
const studentReportScoreRouter = require("./studentReportScoreRouter");

router.use ("/api/v1/major", majorRouter)
router.use ("/api/v1/studentData", studentDataRouter)
router.use ("/api/v1/studentReport", studentReportScoreRouter)

module.exports = router;