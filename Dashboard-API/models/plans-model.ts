import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlanSchema = new Schema(
  {
    name: {
      type: String,
      default: '',
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    numOfDays: {
      type: Number,
      default: 0,
      required: true,
    },
    code: {
      type: String,
      default: '',
      required: true,
    },
    discount: {
      type: String,
      default: '',
      required: false,
    },
    numOfHours: {
      type: Number,
      default: 0,
      required: false,
    },
    limitedPeriod: {
      type: String,
      default: '',
      required: false,
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required: true
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required: false
    },
    comments: {
      type: String,
      default: 'No Comments',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plan", PlanSchema);
