const router = require('express').Router();
const Authenticate = require('../middlewares/authentication');
const CheckRole = require('../middlewares/role');
const {getAllFinalScores, getAllStudentPassed, updateFinalScore} = require('../controllers/adminFinalScoreController')

router.get('/', Authenticate, CheckRole(['admin']), getAllFinalScores);
router.get('/studentPassed', Authenticate, CheckRole(['admin']), getAllStudentPassed);
router.patch('/update/:id',  Authenticate, CheckRole(['admin']),updateFinalScore);

module.exports = router;
