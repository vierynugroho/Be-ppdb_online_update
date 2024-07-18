const router = require("express").Router();
const {register, login} = require("../controllers/authController")
// const Validator = require("../middlewares/validator");
// const { onlyStudent } = require("../utils/joiValidation");

// router.post("/register", Validator(onlyStudent), register) // admin udah dibuat
router.post("/login", login)
router.post("/register", register)

module.exports = router;