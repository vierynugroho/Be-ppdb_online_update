const router = require('express').Router();
const CheckRole = require('../middlewares/role');
const Authenticate = require('../middlewares/authentication');
// const Validator = require('../middlewares/validator');
const { findAllStudentData, findStudentDataById, createStudentData, updateStudentData, deleteStudentData } = require('../controllers/studentDataController');
const upload = require('../middlewares/upload');

router.get('/', Authenticate, CheckRole(['admin', 'student']), findAllStudentData);
router.get('/:id', Authenticate, CheckRole(['admin', 'student']), findStudentDataById);
router.post('/create', Authenticate, CheckRole(['admin', 'student']), upload, createStudentData);
// router.patch('/update/:id', Authenticate, CheckRole(['admin', 'student']), updateStudentData);
router.delete('/delete/:id', Authenticate, CheckRole(['admin']), deleteStudentData);


// router.get('/', findAllStudentData);
// router.get('/:id', findStudentDataById);
// router.post('/create', upload, createStudentData);
router.patch('/update/:id', updateStudentData);
// router.delete('/delete/:id', deleteStudentData);

module.exports = router;
