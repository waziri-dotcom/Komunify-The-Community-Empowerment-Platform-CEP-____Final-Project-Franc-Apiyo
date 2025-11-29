// src/models/loan.model.js
const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: [1, "Loan amount must be greater than 0"],
    },
    interestRate: {
      type: Number,
      default: 0, // Set default interest rate if applicable
    },
    durationMonths: {
      type: Number,
      required: true,
      min: [1, "Duration must be at least 1 month"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Optional: Add a method to calculate total repayable amount
loanSchema.methods.calculateTotalRepayable = function () {
  return this.amount + (this.amount * this.interestRate) / 100;
};

module.exports = mongoose.model("Loan", loanSchema);
