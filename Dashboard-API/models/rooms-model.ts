import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RoomSchema = new Schema(
  {
    name: {
      type: String,
      default: '',
      required: true,
    },
    allowedNumber: {
      type: Number,
      default: 0,
      required: true,
    },
    usage: {
      type: String,
      default: '',
      required: true,
    },
    code: {
      type: String,
      default: '',
      required: true,
    },
    costPerHour: {
      type: Number,
      default: 0,
      required: true,
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

module.exports = mongoose.model("Room", RoomSchema);
