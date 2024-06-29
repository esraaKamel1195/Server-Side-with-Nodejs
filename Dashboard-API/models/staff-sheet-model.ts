import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StaffSheetSchema = new Schema(
  {
    shiftNumber: {
      type: String,
      default: "Shift 1",
      required: true,
    },
    assignedTo: {
      type: String,
      default: "",
      required: true,
    },
    start: {
      type: Date,
      default: null,
      required: true,
    },
    end: {
      type: Date,
      default: null,
      required: true,
    },
    day: {
      type: String,
      default: "Saterday",
      required: true,
    },
    comments: {
      type: String,
      default: "No Comments",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StaffSheet", StaffSheetSchema);
