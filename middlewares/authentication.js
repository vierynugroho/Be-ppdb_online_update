const ApiError = require('../utils/apiError');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { Auth } = require('../models');


// module.exports = async (req, res, next) => {
// 	try {
// 		const bearerToken = req.headers.authorization;
// 		console.log (bearerToken)

// 		if (!bearerToken) {
// 			return next(new ApiError('token not found', 500));
// 		}
// 		const token = bearerToken.split('Bearer ')[1];
// 		const payload = jwt.verify(token, process.env.JWT_SECRET);

// 		const user = await User.findByPk(payload.user_id, {
// 			include: ['Auth'],
// 		});

// 		// const userData = JSON.parse(JSON.stringify(user));
// 		// req.user = userData;
// 		if (!user) {
// 			return next(new ApiError('Unauthorized, please re-login', 401));
// 		}
// 		req.user = user;
// 		console.log (user)
// 		next();
// 	} catch (err) {
// 		next(new ApiError(err.message, 500));
// 	}
// };


module.exports = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      next(new ApiError("Token not found!", 401));
      return;
    }

    const token = bearerToken.split("Bearer ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);

	console.log(payload)
    const user = await User.findOne({
      where: {
	
		full_name: payload.full_name
      },

    });
	console.log("user", user);

    if (!user) {
      return next(new ApiError("User not found", 400));
    }

    req.user = user;
    next();
  } catch (err) {
    return next(new ApiError(err.message, 500));
  }
};


