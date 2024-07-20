// const express = require("express");
// const PDFParser = require ("pdf-parse")
// const fs = require ("fs");

// const uploadDirectory = "./upload";
// const multer = require("multer");
// const mammoth = require ("mammoth");
// const pdf = require("html-pdf");

const { google} = require ("googleapis");
const path = require ("path");
const fs = require ("fs");

exports.getFileDetails = async (req, res)=>{
    try {
        const file = req;
        console.log(file)

        const {data} = await google.drive({version:"v3", auth: auth}).files.create({
            media: {
                mimeType: file.mimeType,
                body: fs.createReadStream(file.path)
            },
            requestBody: {
                name: file.originalName,
                parents: ["1"]
            },
            fields: "id, name"
        })
        console.log(`File uploaded successfully -> ${JSON.stringify(data)}`);

        res.json({ status: 1, message: "success", file_id: data.id, file_name: data.name });
    } catch (error) {
        res.json({ status: -1, message: "failure", err: error.message });
    }
}