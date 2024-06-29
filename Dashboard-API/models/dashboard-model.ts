import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DashboardSchema = new Schema(
  {
    name: {
      type: String,
      default: '',
      required: true,
    },
    type: {
      type: String,
      default: '',
      required: true,
    },
    from: {
      type: Date,
      default: null,
      required: true,
    },
    to: {
      type: Date,
      default: null,
      required: true,
    },
    comment: {
      type: String,
      default: 'No Comments',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dashboard", DashboardSchema);
