const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
  curso: {
    type: String,
    required: true,
  },
  date: {},
});

module.exports = mongoose.model("Curso", cursoSchema);
