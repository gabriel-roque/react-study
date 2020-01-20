const mongoose = require("mongoose");

const TodoScheme = new mongoose.Schema({
  description: { type: String, require: true },
  completed: { type: Boolean, require: false }
});

module.exports = mongoose.model("Todos", TodoScheme);
