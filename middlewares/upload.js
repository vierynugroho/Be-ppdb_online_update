const multer = require("multer");

const allowedTypes = ["image/jpg", "image/jpeg", "image/png", "file/pdf"];

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error(`Only ${allowedTypes.join(", ")} are allowed`));
    }
};

const multerConfig = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
    }
});

const upload = multerConfig.fields([
    { name: "ijazah_picture", maxCount: 1 },
    { name: "student_picture", maxCount: 1 },
    { name: "family_card", maxCount: 1 },
    { name: "graduation_certificate", maxCount: 1 },
    { name: "graduation_certificate_highSchool", maxCount: 1 },
    { name: "report_scores", maxCount: 1 },
    { name: "major_picture", maxCount: 1 },
]);

module.exports = upload;
