import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FacultySchema = new Schema(
  {
    name: {
      type: String,
      default: "",
      required: true,
      unique: true,
    },
    numOfClients: {
      type: Number,
      default: 0,
      min: 0,
      required: false,
    },
    numOfGraduated: {
      type: Number,
      default: 0,
      min: 0,
      required: false,
    },
    numOfUngraduated: {
      type: Number,
      default: 0,
      required: false,
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required: false,
    },
    comment: {
      type: String,
      default: "No Comments",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Faculty", FacultySchema);
