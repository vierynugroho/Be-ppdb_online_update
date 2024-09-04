const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");
const { User, Auth, sequelize } = require("../models");

const getUser = async (req, res, next) => {
  try {
    const user = await User.findAll({
      attributes: ["id", "full_name", "age"],
    });
    if (!user) {
      return next(new ApiError(), ("User not found", 400));
    }
    res.status(200).json({
      status: "Success",
      message: "User successfully retrieved",
      data: user,
    });
  } catch (err) {
    return next(new ApiError(err.message, 500));
  }
};
const getUserById = async (req, res, next) => {
  const user_id = req.user.id;
  console.log(user_id)
  try {
    const findUser = await Auth.findOne({
      where: {
        user_id,
      },
    });
    if (!findUser) {
      return next(new ApiError(`Student data with id ${user_id} not found`, 404));
    }

    res.status(200).json({
      status: "Success",
      message: "Student data successfully retrieved",
      requestAt: req.requestTime,
      data: findUser,
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const register = async (req, res, next) => {
  try {
    const { full_name, user_number,user_role, password, confirm_password } =
      req.body;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const hashedConfirmPassword = bcrypt.hashSync(confirm_password, saltRounds);

    const transaction = await sequelize.transaction();
    try {
      const newUser = await User.create(
        {
          full_name,
          user_number,
          user_role,
        },
        { transaction }
      );

      const auth = await Auth.create(
        {
          user_id: newUser.id,
          user_number,
          password: hashedPassword,
          confirm_password: hashedConfirmPassword,
        },
        { transaction }
      );

      await transaction.commit();
      res.status(201).json({
        status: true,
        message: "User created successfully",
        data: {
          user: {
            id: newUser.id,
            full_name: newUser.full_name,
            user_number: newUser.user_number,
            user_role: newUser.user_role,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
          },
          auth: {
            user_id: newUser.id,
            user_number: auth.user_number,
            password: hashedPassword,
            createdAt: auth.createdAt,
            updatedAt: auth.updatedAt,
          },
        },
      });
    } catch (err) {
      await transaction.rollback();
      return next(new ApiError(err.message, 422));
    }
  } catch (err) {
    return next(new ApiError(err.message, 500));
  }
};
const login = async (req, res, next) => {
  try {
    const { user_number, password } = req.body;
    console.log(req.body);

    if (!user_number || !password) {
      return next(new ApiError("Please enter user_number or password", 400));
    }
    const findUser = await Auth.findOne({
      where: {
        user_number,
      },
      include: ["User"],
    });
    if (!findUser) {
      return next(new ApiError("User not found", 400));
    }

    const isPasswordValid = bcrypt.compareSync(password, findUser.password);
    if (!isPasswordValid) {
      return next(new ApiError("Invalid user_number or password", 401));
    }
    const token = jwt.sign(
      {
        id: findUser.id,
        user_id: findUser.user_id,
        full_name: findUser.User.full_name,
        user_role: findUser.User.user_role,
        user_number: findUser.user_number,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRED,
      }
    );
    console.log(token);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 100,
    });

    res.status(200).json({
      status: "true",
      message: "Login successfully",
      token: token,
    });
  } catch (err) {
    return next(new ApiError(err.message, 500));
  }
};
module.exports = {
  getUser,
  getUserById,
  register,
  login,
};
