// Data structure
const { Schema, model } = require('mongoose');

// Structure definition for our database
const BookSchema = new Schema({
    title:        {type: String, required: true},
    author:       {type: String, required: true},
    isbn:         {type: String, required: true},
    imagePath:    {type: String, required: false},
    creationDate: {type: Date, default: Date.now}
});

module.exports = model('Book', BookSchema); // name and schema


