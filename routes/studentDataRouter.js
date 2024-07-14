const router = require("express").Router();
const CheckRole = require ("../middlewares/role");
const Authenticate = require("../middlewares/authentication");
const Validator = require("../middlewares/validator");
const {getStudentData, getStudentDataById, createStudentData, updateStudentData, deleteStudentData} = require ("../controllers/studentDataController");
const {onlyAdminAndStudent} = require ("../utils/joiValidation")

router.get("/", Authenticate, CheckRole (onlyAdminAndStudent), getStudentData);
router.get("/:id", Authenticate, CheckRole (onlyAdminAndStudent), getStudentDataById);
router.post("/create", Authenticate, CheckRole (onlyAdminAndStudent), createStudentData);
router.patch("/update/:id", Authenticate, CheckRole (onlyAdminAndStudent), updateStudentData);
router.delete("/delete/:id", Authenticate, CheckRole(onlyAdminAndStudent), deleteStudentData);


module.exports = router;


