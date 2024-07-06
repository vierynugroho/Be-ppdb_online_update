const router = require("express").Router();
const {createImage} = require ("../controllers/studentImageController")
const upload = require('../middlewares/upload');

router.post("/", upload, createImage);

module.exports = router;