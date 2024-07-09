const { studentReportScores } = require("../models");
const ApiError = require("../utils/apiError");

const getAllReportScores = async (req, res, next) => {
  try {
    const allReportScores = await studentReportScores.findAll();

    res.status(200).json({
      status: "Success",
      message: "Student report score successfully retrieved",
      requestAt: req.requestTime,
      data: { allReportScores },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const getReportScoreById = async (req, res, next) => {
  try {
    id = req.params.id;
    const findData = await studentReportScores.findOne({
      where:{
        id,
      },
    })
    if (!findData){
      return next (new ApiError (`Score with id ${id} not found`, 404))
    }
    res.status(200).json({
      status: "Success",
      message: "Student report score successfully retrieved" ,
      requestAt: req.requestTime,
      data:{
        findData,
      }
    })
  } catch (err) {
    return next (new ApiError(err.message, 400));

  }
}
const createReportScore = async (req, res, next) => {
  const studentData_id = 2
  const {
    mathematics1,
    mathematics2,
    mathematics3,
    mathematics4,
    mathematics5,
    science1,
    science2,
    science3,
    science4,
    science5,
    indonesian1,
    indonesian2,
    indonesian3,
    indonesian4,
    indonesian5,
    english1,
    english2,
    english3,
    english4,
    english5,
  } = req.body;
  try {
  
    const data = {
      studentData_id,
      mathematics1,
      mathematics2,
      mathematics3,
      mathematics4,
      mathematics5,
      science1,
      science2,
      science3,
      science4,
      science5,
      indonesian1,
      indonesian2,
      indonesian3,
      indonesian4,
      indonesian5,
      english1,
      english2,
      english3,
      english4,
      english5,
    };
    const newReportScore = await studentReportScores.create(data);
    res.status(201).json({
      status: "Success",
      message: "Student score reported successfully created",
      requestAt: req.requestTime,
      data: { newReportScore },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const updateReportScore = async (req, res, next) => {
  const {
    mathematics1,
    mathematics2,
    mathematics3,
    mathematics4,
    mathematics5,
    science1,
    science2,
    science3,
    science4,
    science5,
    indonesian1,
    indonesian2,
    indonesian3,
    indonesian4,
    indonesian5,
    english1,
    english2,
    english3,
    english4,
    english5,
  } = req.body;
  try {
    const id = req.params.id;
    const findData = await studentReportScores.findOne({
      where: {
        id,
      },
    });
    if (!findData) {
      return next(new ApiError(`Data with id ${id} not found`, 404));
    }
    await studentReportScores.update(
      {
        mathematics1,
        mathematics2,
        mathematics3,
        mathematics4,
        mathematics5,
        science1,
        science2,
        science3,
        science4,
        science5,
        indonesian1,
        indonesian2,
        indonesian3,
        indonesian4,
        indonesian5,
        english1,
        english2,
        english3,
        english4,
        english5,
      },
      {
        where: {
          id,
        },
      }
    );
    const updateData = await studentReportScores.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "Student score report successfully updated",
      requestAt: req.requestTime,
      data: { updateData },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const deleteReportScore = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findData = await studentReportScores.findOne({
      where:{
        id,
      }
    });
    if (!findData){
      return next (new ApiError(`Student score report with id ${id} not found`, 404));
    }
    await findData.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "Student score report successfully deleted",
      requestAt: req.requestTime,

    })

  } catch (err) {
    return next (new ApiError(err.message, 400))

  }
}

module.exports = {
  createReportScore,
  updateReportScore,
  getAllReportScores,
  getReportScoreById,
  deleteReportScore
};
