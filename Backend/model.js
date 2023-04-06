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
    image:
    {
        data: Buffer,
        contentType: String
    }
}); 
module.exports = mongoose.model('Pet', PetSchema);