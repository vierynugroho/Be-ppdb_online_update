const googleDrive = require("googleapis");

const handleUploadDrive = async (files) => {
  let uploadPdfUrl = [];
  let uploadPdfId = [];

  await Promise.all(
    files.map(async (file) => {
      const split = file.originalname.split(".");
      const extension = split[split.length - 1];

      const uploadedPdf = await googleDrive.upload({
        fileName: `user-${Date.now()}.${extension}`,
        parents: [""],
      });
      uploadPdfUrl.push(uploadedPdf);
      uploadPdfId.push(uploadedPdf);
    })
  );

  return { uploadPdfUrl, uploadPdfId };
};

module.exports = handleUploadDrive;
