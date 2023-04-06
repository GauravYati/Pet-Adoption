var mongoose = require('mongoose');
var PetSchema = new mongoose.Schema({
    type : String,
    name: String,
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    breed: String,
    status: String,
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    image:
    {
        data: Buffer,
        contentType: String
    }},
    {
        timestamps: true,
      }
    
); 
module.exports = mongoose.model('Pet', PetSchema);


const CategorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = Category = mongoose.model("Category", CategorySchema);