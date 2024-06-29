import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
      required: true,
    },
    email: {
      type: String,
      default: "",
      required: true,
      unique: true
    },
    password: {
      type: String,
      default: "123456",
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
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

module.exports = mongoose.model("User", UserSchema);
