const mongoose = require("mongoose");

const foodAidSchema = new mongoose.Schema(
  {
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "distributed"], default: "pending" },
  },
  { timestamps: true }
);

const FoodAid = mongoose.models.FoodAid || mongoose.model("FoodAid", foodAidSchema);

module.exports = FoodAid;
