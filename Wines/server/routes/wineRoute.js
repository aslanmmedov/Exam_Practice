const express = require('express');

const {
    GetDataById,
    AddData,
    DeleteDataById,
    GetAllData
} = require("../controllers/wineMethodController");

const router = express.Router();

router.get('/',GetAllData);
router.post('/',AddData);
router.delete('/:id',DeleteDataById);
router.get('/:id',GetDataById);

module.exports = router;