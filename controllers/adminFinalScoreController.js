const { AdminStudentFinalScore, studentReportScores } = require("../models");
const ApiError = require("../utils/apiError");

const getAllFinalScores = async (req, res, next) => {
  try {
    const allFinalScores = await AdminStudentFinalScore.findAll();
    res.status(200).json({
      status: "Success",
      message: "All student scores successfully retrieved",
      requestAt: req.requestTime,
      data: { allFinalScores },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const createFinalScore = async (req, res, next) => {
  try {
    const { user_id, health_score, interview_score } = req.body;
    const total_report = await studentReportScores.findOne({
      where: {
        user_id,
      },
    });
    const average_score = (health_score + interview_score + total_report.total_report_score) / 2;
    const data = {
      user_id,
      health_score,
      interview_score,
      average_final_score: average_score,
    };
    const finalScore = await AdminStudentFinalScore.create(data);
    res.status(200).json({
      status: "Success",
      message: "Final Score created successfully",
      requestAt: req.requestTime,
      data: finalScore,
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
const updateFinalScore = async (req, res, next) => {
  const { health_score, interview_score, user_id } = req.body;
  try {
    const total_report = await studentReportScores.findOne({
      where: {
        user_id,
      },
    });

    if (!total_report) {
      return next(new ApiError(`Total report with user_id ${user_id} not found`, 404));
    }

    const id = req.params.id;
    const findData = await AdminStudentFinalScore.findOne({
      where: {
        id,
      },
    });

    if (!findData) {
      return next(new ApiError(`Data with id ${id} not found`, 404));
    }
    const average_score = (health_score + interview_score + total_report.total_report_score) / 2;
    await AdminStudentFinalScore.update(
      {
        user_id,
        health_score,
        interview_score,
        average_final_score: average_score,
      },
      {
        where: {
          id,
        },
      }
    );
    const updateData = await AdminStudentFinalScore.findOne({
      where: {
        id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Final Score successfully updated",
      requestAt: req.requestTime,
      data: updateData,
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

module.exports = {
  getAllFinalScores,
  createFinalScore,
  updateFinalScore,
};
