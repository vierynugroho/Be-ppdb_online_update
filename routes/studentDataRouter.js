const router = require('express').Router();
const CheckRole = require('../middlewares/role');
const Authenticate = require('../middlewares/authentication');
const Validator = require('../middlewares/validator');
const { findAllStudentData, findStudentDataById, createStudentData, updateStudentData, deleteStudentData } = require('../controllers/studentDataController');
const upload = require('../middlewares/upload');


router.get('/', Authenticate, CheckRole("admin"), findAllStudentData);
router.get('/:id', Authenticate, CheckRole("admin"), findStudentDataById);
router.post('/create', Authenticate, CheckRole("admin", "student"), upload, createStudentData);
router.patch('/update/:id', Authenticate, CheckRole("admin", "student"), updateStudentData);
router.delete('/delete/:id', Authenticate, CheckRole("admin"), deleteStudentData);

module.exports = router;