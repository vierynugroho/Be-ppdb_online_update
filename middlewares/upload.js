const multer = require("multer");

const storage = multer.memoryStorage();

const multerConfig = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
    }
});

const upload = multerConfig.fields([
    { name: "major_picture", maxCount: 1 },
    { name: "studentDocument", maxCount: 1 },
]);

module.exports = upload;