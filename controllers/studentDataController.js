const { studentData } = require("../models");
const ApiError = require("../utils/apiError");

const getStudentData = async (req, res, next) => {
  try {
    const allStudentData = await studentData.findAll();

    res.status(200).json({
      status: "Success",
      message: "Student data successfully retrieved",
      requestAt: req.requestTime,
      data: allStudentData
    });
  } catch (err) {
    return next(new Error(err.message, 400));
  }
};
const getStudentDataById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findData = await studentData.findOne({
      where: {
        id,
      },
    });

    if (!findData) {
      return next(new ApiError(`Student data with id ${id} not found`, 404));
    }
    res.status(200).json({
      status: "Success",
      message: "Student data successfully retrieved",
      requestAt: req.requestTime,
      data: findData
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const createStudentData = async (req, res, next) => {
  const user_id = 1
  const {
    student_name,
    student_gender,
    place_birth,
    date_birth,
    student_address,
    student_distance,
    student_religion,
    student_blood_type,
    student_weight,
    student_height,
    student_child,
    student_kps,
    student_hobby,
    father_name,
    father_job,
    place_birth_father,
    father_birth,
    mother_name,
    mother_job,
    place_birth_mother,
    mother_birth,
    phoneNumber_house,
    guardian_name,
    guardian_address,
    guardian_phone,
    guardian_job,
    school_name,
    school_address,
    ijazah_number,
    nisn,
  } = req.body;

  try {
    const newStudentData = await studentData.create({
      user_id,
      student_name,
      student_gender,
      place_birth,
      date_birth,
      student_address,
      student_distance,
      student_religion,
      student_blood_type,
      student_weight,
      student_height,
      student_child,
      student_kps,
      student_hobby,
      father_name,
      father_job,
      place_birth_father,
      father_birth,
      mother_name,
      mother_job,
      place_birth_mother,
      mother_birth,
      phoneNumber_house,
      guardian_name,
      guardian_address,
      guardian_phone,
      guardian_job,
      school_name,
      school_address,
      ijazah_number,
      nisn,
    });
    res.status(200).json({
      status: "Success",
      message: " Student Data Successfully created",
      requestAt: req.requestTime,
      data:newStudentData
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const updateStudentData = async (req, res, next) => {
  const user_id = 1
  const {
    student_name,
    student_gender,
    place_birth,
    date_birth,
    student_address,
    student_distance,
    student_religion,
    student_blood_type,
    student_weight,
    student_height,
    student_child,
    student_kps,
    student_hobby,
    father_name,
    father_job,
    place_birth_father,
    father_birth,
    mother_name,
    mother_job,
    place_birth_mother,
    mother_birth,
    phoneNumber_house,
    guardian_name,
    guardian_address,
    guardian_phone,
    guardian_job,
    school_name,
    school_address,
    ijazah_number,
    nisn,
  } = req.body;
  try {
    const id = req.params.id;
    const findData = await studentData.findOne({
      where: {
        id,
      },
    });
    if (!findData) {
      return next(new ApiError(`Data with id '${id}' not found`, 404));
    }
    await studentData.update(
      {
        user_id,
        student_name,
        student_gender,
        place_birth,
        date_birth,
        student_address,
        student_distance,
        student_religion,
        student_blood_type,
        student_weight,
        student_height,
        student_child,
        student_kps,
        student_hobby,
        father_name,
        father_job,
        place_birth_father,
        father_birth,
        mother_name,
        mother_job,
        place_birth_mother,
        mother_birth,
        phoneNumber_house,
        guardian_name,
        guardian_address,
        guardian_phone,
        guardian_job,
        school_name,
        school_address,
        ijazah_number,
        nisn,
      },
      {
        where: {
          id,
        },
      }
    );

    const updateData = await studentData.findOne({
      where: {
        id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Student Data successfully updated",
      requestAt: req.requestTime,
      data: updateData
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const deleteStudentData = async (req, res, next) => {
  try {
   const id = req.params.id;
   const findData = await studentData.findOne({
      where: {
        id,
      },
    });
    if (!findData){
        return next (new ApiError(`Student data with id ${id} not found`, 400));
    }
    await findData.destroy({
        where: {
            id,
        },
    });
    res.status(200).json({
        status: "Success",
        message: "Student data successfully deleted",
        requestAt: req.requestTime,
    })
  } catch (err) {
    return next (new ApiError(err.message, 400));
  }
};

module.exports = {
  getStudentData,
  createStudentData,
  updateStudentData,
  getStudentDataById,
  deleteStudentData
};
