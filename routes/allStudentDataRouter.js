
const router = require('express').Router();
const CheckRole = require('../middlewares/role');
const Authenticate = require('../middlewares/authentication');
// const Validator = require('../middlewares/validator');
const { findAllStudentData, findStudentDataById, createStudentData, updateStudentData, deleteStudentData } = require('../controllers/allStudentDataController');
const upload = require('../middlewares/upload');

router.get('/', Authenticate,  findAllStudentData);
router.get('/:id', Authenticate, findStudentDataById);
router.post('/create', Authenticate, CheckRole(['admin', 'student']), upload, createStudentData);
router.patch('/update/:id', Authenticate, CheckRole(['admin']), upload, updateStudentData);
router.delete('/delete/:id', Authenticate, CheckRole(['admin']), deleteStudentData);


module.exports = router;
