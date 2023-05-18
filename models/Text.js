import mongoose from "mongoose";

const TextSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.models.Text || mongoose.model("Text", TextSchema);
