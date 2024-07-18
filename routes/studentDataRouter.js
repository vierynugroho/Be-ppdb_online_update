const router = require("express").Router();
const CheckRole = require ("../middlewares/role");
const Authenticate = require("../middlewares/authentication");
const Validator = require("../middlewares/validator");
const {getStudentData, getStudentDataById, createStudentData, updateStudentData, deleteStudentData} = require ("../controllers/studentDataController");
const {onlyAdminAndStudent} = require ("../utils/joiValidation")

// router.get("/", getStudentData);
// router.get("/:id", Authenticate, CheckRole (onlyAdminAndStudent), getStudentDataById);
// router.post("/create", Authenticate, CheckRole (onlyAdminAndStudent), createStudentData);
// router.patch("/update/:id", Authenticate, CheckRole (onlyAdminAndStudent), updateStudentData);
// router.delete("/delete/:id", Authenticate, CheckRole(onlyAdminAndStudent), deleteStudentData);

router.get("/", getStudentData);
router.get("/:id", getStudentDataById)
router.post("/create", createStudentData);
router.patch("/update/:id", updateStudentData);
router.delete("/delete/:id", deleteStudentData)

module.exports = router;


