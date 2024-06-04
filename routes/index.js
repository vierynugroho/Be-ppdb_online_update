const router = require("express").Router();

const majorRouter = require("./majorRouter");

router.use ("/api/v1/major", majorRouter)

module.exports = router;