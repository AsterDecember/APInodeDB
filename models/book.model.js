const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    name: {type: String, required: true, max: 50},
    id: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Book', BookSchema);