const mongoose = require('mongoose');
// set up the schema

const { Schema, model } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  authors: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model('Book', BookSchema);
