const multer = require("multer");
const os = require("os");
const router = require("express").Router();
const { getFileDetails } = require("../controllers/uploadDriveControllers");
const upload =require ("../middlewares/upload")

// const storage = multer.diskStorage({
//   destination: os.tmpdir(),
//   filename: (req, file, callback) => callback(null, `${file.originalname}`),
// });

// const upload = multer({storage:storage});
router.post("/create", upload, getFileDetails);

module.exports = router;