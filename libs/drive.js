const googleDrive = require("googleapis")
const { SCOPES, GOOGLE_DRIVE_CLIENT_ID, GOOGLE_DRIVE_CLIENT_URL, GOOGLE_DRIVE_PRIVATE_KEY } = process.env;

module.exports = new googleDrive({
	scopes: SCOPES,
	googleDriveClientId:GOOGLE_DRIVE_CLIENT_ID,
	googleDriveClientUrl:GOOGLE_DRIVE_CLIENT_URL,
    googleDrivePrivetKey:GOOGLE_DRIVE_PRIVATE_KEY
});
