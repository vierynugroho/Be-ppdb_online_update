const {Article} = require("../models");
const ApiError = require("../utils/apiError");

const getAllArticle = async (req, res, next) => {
    try {
        const allArticle = await Article.findAll();
        res.status(200).json({
            status: "Success",
            message: "All articles successfully retrieved",
            requesAt: req.requestTime,
            data: allArticle
        })
    } catch (err) {
        return next(new ApiError(err.message, 400));
    }
}

const createArticle = async (req, res, next) => {
    try {
        const {article_name, article_description} = req.body;
      console.log("REQQ",req.body);

        const newArticle = await Article.create({
            article_name, article_description
        });
        // console.log(newArticle);
        res.status(200).json({
            status: "Success",
            message: "Article successfully created",
            data:newArticle
        })
    } catch (err) {
        return next(new ApiError(err.message, 400));
    }
}

const updateArticle = async (req, res, next ) => {
    try {
        const {article_name, article_description} = req.body;
         const id = req.params.id;

         const findAllArticle = await Article.findOne({
            where:{
                id,
            }
         })
         if (!findAllArticle){
            return next(new ApiError(`Article with id '${id}' is not found`, 404));
         }

         await Article.update({
            article_name,
            article_description
         },{
            where:{
                id,
            }
         })

         res.status(200).json({
            status: "Success",
            message: `Article with id '${id}' successfully updated`,
            data:{
                 article_name:article_name,
            article_description:article_description
            }
         })

    } catch (err) {
        return next(new ApiError(err.message, 400));
        
    }
}

const deleteArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;

    // Cari artikel berdasarkan ID
    const findArticle = await Article.findByPk(articleId);

    // Jika artikel tidak ditemukan, kembalikan error dengan informasi ID
    if (!findArticle) {
      return res.status(404).json({
        status: "Error",
        message: `Article with id '${articleId}' not found`,
      });
    }

    // Hapus artikel dari database
    await Article.destroy({
      where: {
        id: articleId,
      },
    });

    // Kirim respons sukses
    res.status(200).json({
      status: "Success",
      message: "Article successfully deleted",
      requestAt: new Date().toISOString(), // Atau gunakan req.requestTime
    });
  } catch (err) {
    // Tangani kesalahan
    res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};


module.exports ={
    getAllArticle,
    createArticle,
    updateArticle,
    deleteArticle,
}