const WineModel = require("../model/wineModel");

const GetAllData = async (req,res) => {
    try {
        const wines = await WineModel.find({});
        res.status(200).json({data:wines,message:"succes"})
    } catch (error) {
        res.status(404).json({message:"No Such Data"})
    }
}
const GetDataById = async (req,res) => {
    const {id} = req.params;
    try {
        const wine = await WineModel.findById(id);
        res.status(200).json({data:wine,message:"succes"})
    } catch (error) {
        res.status(404).json({message:"No Such Data"})
    }
}
const DeleteDataById = async (req,res) => {
    const {id} = req.params;
    try {
        const deletedWine = await WineModel.findByIdAndDelete(id);
        res.status(200).json({data:deletedWine,message:"succesfuly deleted"})
    } catch (error) {
        res.status(404).json({message:"No Such Data"})
    }
}
const AddData = async (req,res) => {
    try {
        const AddedWine = WineModel({...req.body});
        await AddedWine.save();
        res.status(201).json({data:AddedWine,message:"succesfuly added"})
    } catch (error) {
        res.status(400).json({message:"Bad Request"})
    }
}

module.exports = {
    GetAllData,
    GetDataById,
    DeleteDataById,
    AddData,
}