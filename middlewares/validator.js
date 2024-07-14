const ApiError = require("../utils/apiError");

module.exports = (schema) => {
	return async (req, res, next) => {
		try {
			const validated = await schema.validateAsync(req.body);
			req.body = validated;
			next();
		} catch (err) {
			if (err.isJoi) return next(new ApiError(err.message, 422));

			next(new ApiError (500));
		}
	};
};
