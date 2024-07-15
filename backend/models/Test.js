const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
