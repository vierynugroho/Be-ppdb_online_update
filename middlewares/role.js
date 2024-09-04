// const ApiError = require("../utils/apiError");

// module.exports = (allowedRoles) => {
// 	return async (req, res, next) => {
// 		let user_role = req.user !== undefined ? req.user.user_role : 'student';

// 		try {
// 			const user = req.user;
// 			console.log("Checkroleee", user);
// 			if (!user) {
// 				console.log("disini?", req.user)
//                 return next (new ApiError("Unauthorized", 401))
//             }
// 			if (!allowedRoles.includes(user_role)) {
//                 return next (new ApiError("Your role does not have access permissions", 403))
// 			}
// 			next();
// 		} catch (err) {

//             next (new ApiError(err.message, 500))
// 		}
// 	};
// };


const ApiError = require("../utils/apiError");

module.exports = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      if (!user) {
        return next(new ApiError("Unauthorized", 401));
      }

      const user_role = user.user_role;
      console.log("User Role:", user_role); // Debugging peran pengguna

      if (!allowedRoles.includes(user_role)) {
        return next(new ApiError("Your role does not have access permissions", 403));
      }

      next();
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};
