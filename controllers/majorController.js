const {Majors} = require ("../models")
const ApiError = require ("../utils/apiError")

const getAllMajors = async (req, res, next) => {
    try {
        const allMajors = await Majors.findAll();

        res.status(200).json({
            status: "Success",
            message: "All Majors successfully retrieved",
            requestAt: req.requestTime,
            data: {allMajors},
        });

    }catch (err) {
        return next (new ApiError(err.message, 400))
    }
};
const getMajorById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const findMajor = await Majors.findOne({
            where: {
                id,
            }
        });
        if (!findMajor ){
            return next(new ApiError (`Major with id '${id} not found`, 404));
        }
        res.status(200).json({
            status: "Success",
            message: `Major with id '${id}' successfully retrieved`,
            requestAt:req. requestTime,
            data: {findMajor}
        });
    }catch(err){
        return next (new ApiError(err.message, 400))
    }

};
const createMajor = async (req, res, next) => {
    const {major_name, major_description} = req.body;
    try {
        const data = {
            major_name,
            major_description,
        }
        console.log(data);
        const newMajor = await Majors.create(data);

        res.status(201).json({
            status: "Success",
            message: "Major successfully created",
            data: { newMajor },
        })
    }catch (err) {
        return next (new ApiError(err.message, 400))
    }

};
const updateMajor = async (req, res, next) => {
    const{major_name, major_description} = req.body;
    try{
        const id = req.params.id;
        const findMajor = await Majors.findOne({
            where:{
                id,
            }
        });
        if (!findMajor){
            return next (new ApiError(`Major with id '${id}' not found`, 404))
        }
        await Majors.update({
            major_name,
            major_description

        },{
            where: {
                id,
            }
        })
        const updateMajor= await Majors.findOne({
            where: {
                id,
            }
        });

        res.status(200).json({
            status: "Success",
            message: "Major Successfully",
            requestAt: req.requestTime,
            data:{updateMajor}
        })
    }catch (err) {
        return next (new ApiError (err.message,400))
    }
};
const deleteMajor = async  (req, res, next) => {
    try{
        const Major = await major.findByPk(req.params.id);

        if (!Major){
            return next (new ApiError (`Major with id '${id}' not found`))
        }

        await Majors.destroy({
            where:{
                id: req.params.id,
            },
        })

        res.status(200).json({
            status: "Success",
            message: "Major successfully deleted",
            requestAt: req.requestTime
        })
    }catch(err){
        return next (new ApiError (err.message, 400))
    }
};

module.exports = {
    getAllMajors,
    createMajor,
    updateMajor,
    getMajorById,
    deleteMajor
}
