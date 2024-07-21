const router = require('express').Router();
const Authenticate = require('../middlewares/authentication');
const { createMajor, updateMajor, getAllMajors, getMajorById, deleteMajor } = require('../controllers/majorController');
const upload = require('../middlewares/upload');
const CheckRole = require('../middlewares/role');
const Validator = require('../middlewares/validator');
const { majorSchema, updateMajorSchema } = require('../utils/joiValidation');

router.get('/', Authenticate, CheckRole(['admin']), getAllMajors);
router.get('/:id', Authenticate, CheckRole(['admin']), getMajorById);
router.post('/create', Authenticate, CheckRole(['admin']), upload, Validator(majorSchema), createMajor);
router.patch('/update/:id', Authenticate, CheckRole(['admin']), upload, Validator(updateMajorSchema), updateMajor);
router.delete('/delete/:id', Authenticate, CheckRole(['admin']), deleteMajor);

module.exports = router;
