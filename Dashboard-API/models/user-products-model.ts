import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserProductsSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      default: null,
      required: true,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Registeration",
      default: null,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
      required: false,
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
      default: "No comments",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserProduct", UserProductsSchema);
