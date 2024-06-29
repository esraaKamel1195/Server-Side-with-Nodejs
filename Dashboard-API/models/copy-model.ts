import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CopySchema = new Schema(
  {
    // copyNumber: {
    //   type: String,
    //   default: null,
    //   required: true,
    // },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      default: null,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
      required: true,
    },
    priceForOne: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    TotalPrice: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    date: {
      type: Date,
      default: null,
      required: true,
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

module.exports = mongoose.model("Copy", CopySchema);
