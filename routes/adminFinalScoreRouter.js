const router = require('express').Router();
const finalScore = require('../controllers/adminFinalScoreController');
const authentication = require('../middlewares/authentication');
const CheckRole = require('../middlewares/role');

router.get('/', authentication, CheckRole(['admin']), finalScore.getAllFinalScores);
router.post('/', authentication, CheckRole(['admin']), finalScore.createFinalScore);
router.patch('/:id', authentication, CheckRole(['admin']), finalScore.updateFinalScore);

module.exports = router;
