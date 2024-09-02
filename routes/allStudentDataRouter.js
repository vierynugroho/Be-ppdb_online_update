
const router = require('express').Router();
const CheckRole = require('../middlewares/role');
const Authenticate = require('../middlewares/authentication');
// const Validator = require('../middlewares/validator');
const { findAllStudentData, findStudentDataById, createStudentData, updateStudentData, deleteStudentData } = require('../controllers/allStudentDataController');
const upload = require('../middlewares/upload');

router.get('/', Authenticate, CheckRole(['admin']), findAllStudentData);
router.get('/:id', Authenticate, CheckRole(['admin', 'student']), findStudentDataById);
router.post('/create', Authenticate, upload, createStudentData);
router.patch('/update/:id', Authenticate, CheckRole(['admin']), upload, updateStudentData);
router.delete('/delete/:id', Authenticate, CheckRole(['admin']), deleteStudentData);


// router.get('/', findAllStudentData);
// router.get('/:id', findStudentDataById);
// router.post('/create', upload, createStudentData);
// router.patch('/update/:id', upload, updateStudentData);
// router.delete('/delete/:id', deleteStudentData);

module.exports = router;
