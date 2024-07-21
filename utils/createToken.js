const jwt = require("jsonwebtoken");
function createToken (user) {
    const payload ={
        id: user.id,
        full_name:user.full_name,
        email: user.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES,
    });
};
module.exports = createToken;