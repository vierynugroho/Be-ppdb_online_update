const router = require('express').Router();
const CheckRole = require('../middlewares/role');
const Authenticate = require('../middlewares/authentication');
const {getAllArticle, createArticle, updateArticle, deleteArticle}= require('../controllers/articleController');

router.get('/',  getAllArticle);
router.post('/create', Authenticate, createArticle);
router.patch('/update/:id', Authenticate, updateArticle);
router.delete('/delete/:id', deleteArticle);

module.exports = router;