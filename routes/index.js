const router = require("express").Router();

const majorRouter = require("./majorRouter");
const studentDataRouter = require("./studentDataRouter");
const studentReportScoreRouter = require("./studentReportScoreRouter");
const studentImageRouter = require("./studentImageRouter");
const authRouter = require ("./authRouter");


router.use ("/api/v1/major", majorRouter);
router.use ("/api/v1/studentData", studentDataRouter);
router.use ("/api/v1/studentReport", studentReportScoreRouter);
router.use ("/api/v1/studentImage", studentImageRouter);
router.use ("/api/v1/auth", authRouter)



module.exports = router;