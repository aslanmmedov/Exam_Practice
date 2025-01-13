const mongoose = require('mongoose');
const { Schema } = mongoose;

const WineSchema = new Schema({
  name: String, 
  price: Number,
  description: String,
  imgUrl: String,
},{versionKey:false, timestamps:true});

const WineModel = mongoose.model('Wines', WineSchema);

module.exports = WineModel;