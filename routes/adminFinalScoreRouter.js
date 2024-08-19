const router = require('express').Router();
const finalScore = require('../controllers/adminFinalScoreController');
const authentication = require('../middlewares/authentication');
const CheckRole = require('../middlewares/role');

router.get('/', finalScore.getAllFinalScores);
router.post('/',  authentication, finalScore.createFinalScore);
router.patch('/update/:id',  finalScore.updateFinalScore);
router.delete('/delete/:id', finalScore.deleteFinalScore);

module.exports = router;
