const router = require('express').Router();
const Authenticate = require('../middlewares/authentication');
const CheckRole = require('../middlewares/role');
const Validator = require('../middlewares/validator');
const { register, login, getUser, getUserById } = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.get('/me/:id', Authenticate, CheckRole(['admin', 'student']), getUserById)
module.exports = router;
