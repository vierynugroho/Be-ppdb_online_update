const router = require('express').Router();
const CheckRole = require('../middlewares/role');
const Authenticate = require('../middlewares/authentication');
const Validator = require('../middlewares/validator');
const { getStudentData, getStudentDataById, createStudentData, updateStudentData, deleteStudentData } = require('../controllers/studentDataController');
const upload = require('../middlewares/upload');


router.get('/', Authenticate, CheckRole("admin","student"), getStudentData);
router.get('/:id', Authenticate, CheckRole("admin", "student"), getStudentDataById);
router.post('/create', Authenticate, CheckRole("admin", "student"), upload, createStudentData);
router.patch('/update/:id', Authenticate, CheckRole("admin", "student"), updateStudentData);
router.delete('/delete/:id', Authenticate, CheckRole("admin", "student"), deleteStudentData);

module.exports = router;