const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
