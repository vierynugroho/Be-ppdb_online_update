const router = require("express").Router();

const authRouter = require ("./authRouter");
const majorRouter = require("./majorRouter");
// const studentDataRouter = require("./studentDataRouter");
const allStudentData = require("./allStudentDataRouter")
const finalScoreRouter = require("./adminFinalScoreRouter");
const articleRouter = require("./articleRouter")

router.use ("/api/v1/auth", authRouter);
router.use ("/api/v1/major", majorRouter);
// router.use ("/api/v1/studentData", studentDataRouter);
router.use ("/api/v1/studentData", allStudentData);
router.use ("/api/v1/finalScore", finalScoreRouter);
router.use("/api/v1/article", articleRouter)





module.exports = router;