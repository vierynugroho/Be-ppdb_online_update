const { AdminStudentFinalScore, studentReportScores } = require("../models");
const { Sequelize, where } = require("sequelize");
const ApiError = require("../utils/apiError");

const getAllFinalScores = async (req, res, next) => {
  try {
    const allFinalScores = await AdminStudentFinalScore.findAll({
      order: [["average_final_score", "DESC"]],
    });
    res.status(200).json({
      status: "Success",
      message: "All student scores successfully retrieved",
      requestAt: req.requestTime,
      data: allFinalScores,
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};
// const createFinalScore = async (req, res, next) => {
//   try {
//     const user_id = req.user.id;
//     console.log(req.user.id)
//     const { health_score, interview_score } = req.body;
//     const total_report = await studentReportScores.findOne({
//       where: {
//         user_id,
//       },
//     });
//     const average_score = (health_score + interview_score + total_report.total_report_score) / 2;
//     const data = {
//       health_score,
//       interview_score,
//       average_final_score: average_score,
//     };
//     const finalScore = await AdminStudentFinalScore.create(data);
//     res.status(200).json({
//       status: "Success",
//       message: "Final Score created successfully",
//       requestAt: req.requestTime,
//       data: finalScore,
//     });
//   } catch (err) {
//     return next(new ApiError(err.message, 400));
//   }
// };

const createFinalScore = async (req, res, next) => {
  try {
    const user_id = req.user.id;
    console.log("User ID:", user_id);

    const { health_score, interview_score } = req.body;

    // Cek jika user_id ada di database
    const total_report = await studentReportScores.findOne({
      where: { user_id },
    });

    // Jika total_report tidak ditemukan, beri respons kesalahan
    if (!total_report) {
      return res.status(404).json({
        status: "Error",
        message: "Total report tidak ditemukan untuk user ini",
      });
    }

    // Cek jika health_score dan interview_score ada
    let average_score = null;
    if (health_score !== undefined && interview_score !== undefined) {
      average_score =
        (health_score + interview_score + total_report.total_report_score) / 2;
    }

    // Siapkan data untuk disimpan
    const data = {
      user_id,
      health_score: health_score !== undefined ? health_score : null,
      interview_score: interview_score !== undefined ? interview_score : null,
      average_final_score: average_score,
    };

    // Simpan data ke database
    const finalScore = await AdminStudentFinalScore.create(data);

    // Kirimkan respons sukses
    res.status(200).json({
      status: "Success",
      message: "Final Score created successfully",
      requestAt: req.requestTime,
      data: finalScore,
    });
  } catch (err) {
    // Tangani kesalahan
    return next(new ApiError(err.message, 400));
  }
};

// const updateFinalScore = async (req, res, next) => {
//   const { health_score, interview_score, user_id } = req.body;
//   const id = req.params.id;
//   try {
//     const total_report = await studentReportScores.findOne({
//       where: {
//         user_id,
//       },
//     });
//     console.log("Nilai raportt", total_report)

//     if (!total_report) {
//       return next(new ApiError(`Total report with user_id ${user_id} not found`, 404));
//     }

//     const findData = await AdminStudentFinalScore.findOne({
//       where: {
//         id,
//       },
//     });

//     if (!findData) {
//       return next(new ApiError(`Data with id ${id} not found`, 404));
//     }
//     const average_score = (health_score + interview_score + total_report.total_report_score) / 2;

//     await AdminStudentFinalScore.update(
//       {
//         user_id,
//         health_score,
//         interview_score,
//         average_final_score: average_score,

//       },
//       {
//         where: {
//           id,
//         },
//       }
//     );
//     const updateData = await AdminStudentFinalScore.findOne({
//       where: {
//         id,
//       },
//     });
//     console.log(updateData);

//     res.status(200).json({
//       status: "Success",
//       message: "Final Score successfully updated",
//       requestAt: req.requestTime,
//       data: updateData,
//     });
//   } catch (err) {
//     return next(new ApiError(err.message, 400));
//   }
// };

// const updateFinalScore = async (req, res, next) => {
//   const { health_score, interview_score, user_id, average_final_score } = req.body;
//   console.log(req.body);
//   const id = req.params.id;

//   try {
//     // Fetch the record to be updated
//     const findData = await AdminStudentFinalScore.findOne({
//       where: { id },
//     });

//     if (!findData) {
//       return next(new ApiError(`Data with id ${id} not found`, 404));
//     }

//     // Update the record
//     await AdminStudentFinalScore.update(
//       {
//         user_id,
//         health_score,
//         interview_score,
//         average_final_score,
//       },
//       {
//         where: { id },
//       }
//     );

//     const updateData = await AdminStudentFinalScore.findOne({
//       where: { id },
//     });

//     res.status(200).json({
//       status: "Success",
//       message: "Final Score successfully updated",
//       requestAt: req.requestTime,
//       data: updateData,
//     });
//   } catch (err) {
//     return next(new ApiError(err.message, 400));
//   }
// };

const updateFinalScore = async (req, res, next) => {
  const { health_score, interview_score, user_id } = req.body;
  const id = req.params.id;

  try {
    // Fetch the total report score based on user_id
    const total_report = await studentReportScores.findOne({
      where: {
        user_id,
      },
    });

    // Log the total report score
    console.log("Nilai raportt:", total_report);

    if (!total_report) {
      return next(
        new ApiError(`Total report with user_id ${user_id} not found`, 404)
      );
    }

    // Fetch the existing data to be updated
    const findData = await AdminStudentFinalScore.findOne({
      where: {
        id,
      },
    });

    if (!findData) {
      return next(new ApiError(`Data with id ${id} not found`, 404));
    }

    // Extract total_report_score
    const total_report_score = total_report.total_report_score;
    const health_score_number = parseFloat(health_score);
    const interview_score_number = parseFloat(interview_score);
    const total_report_score_number = parseFloat(total_report_score);
    const average_score =
      (health_score_number +
        interview_score_number +
        total_report_score_number) /
      2;

    // Log the scores and average
    console.log("Health Score:", health_score);
    console.log("Interview Score:", interview_score);
    console.log("Total Report Score:", total_report_score);
    console.log("Average Final Score:", average_score);

    // Update the record with the calculated average_final_score
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

    // Fetch updated data
    const updateData = await AdminStudentFinalScore.findOne({
      where: {
        id,
      },
    });

    // Log the updated data
    console.log("Updated Data:", updateData);

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

const deleteFinalScore = async (req, res) => {
  try {
    const user_id = req.params.id;
    const findData = await AdminStudentFinalScore.findOne({
      where: {
        user_id,
      },
    });
    if (!findData) {
      return next(
        new ApiError(`Final Score data with id ${id} not found`, 400)
      );
    }
    await findData.destroy({
      where: {
        user_id,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "Student data successfully deleted",
      requestAt: req.requestTime,
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

module.exports = {
  getAllFinalScores,
  createFinalScore,
  updateFinalScore,
  deleteFinalScore
};
