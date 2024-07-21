const Joi = require("joi");

// login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).alphanum().required(),
});

//only admin
const onlyAdminAndStudent = Joi.object({
  full_name: Joi.string().max(50).required(),
  user_role: Joi.string().required().valid("admin", "student"),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).alphanum().required(),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Confirm password does not match password",
  }),
});

const onlyAdminUpdate = Joi.object({
  full_name: Joi.string().max(60),
  user_role: Joi.string().valid("admin", "student"),
  email: Joi.string().email(),
  //   user_id: Joi.string()
  confirmPassword: Joi.any().valid(Joi.ref("password")).messages({
    "any.only": "Confirm password does not match password",
  }),
});

// only
const onlyStudent = Joi.object({
  full_name: Joi.string().max(50).required(),
  age: Joi.string().max(10).required(),
  user_role: Joi.string().required().valid("student"),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).alphanum().required(),
  confirm_password: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Confirm password does not match password",
  }),
});

// majors
const majorSchema = Joi.object({
  major_name: Joi.string().max(30).required(),
  major_description: Joi.string().max(300).required(),
  major_picture: Joi.any(),
});

const updateMajorSchema = Joi.object({
  major_name: Joi.string().max(30),
  major_description: Joi.string().max(300),
   major_picture: Joi.any(),
});

module.exports = {
  loginSchema,
  onlyAdminAndStudent,
  onlyAdminUpdate,
  onlyStudent,
  majorSchema,
  updateMajorSchema,
};
