const router = require('express').Router();
const CheckRole = require('../middlewares/role');
const Authenticate = require('../middlewares/authentication');
const {getAllArticle, createArticle, updateArticle, deleteArticle}= require('../controllers/articleController');

router.get('/',  getAllArticle);
router.post('/create', Authenticate, CheckRole(["admin"]), createArticle);
router.patch('/update/:id', Authenticate, CheckRole(["admin"]), updateArticle);
router.delete('/delete/:id', Authenticate, CheckRole(["admin"]), deleteArticle);

module.exports = router;