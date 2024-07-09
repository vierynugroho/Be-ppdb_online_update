const router = require("express").Router();
const finalScore = require("../controllers/adminFinalScoreController");

router.get("/", finalScore.getAllFinalScores);
router.post("/", finalScore.createFinalScore);
router.patch("/:id", finalScore.updateFinalScore);

module.exports= router;