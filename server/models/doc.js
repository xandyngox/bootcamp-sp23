const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  doc_id: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Doc", docSchema);
