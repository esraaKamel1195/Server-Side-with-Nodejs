import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RegisterationSchema = new Schema(
  {
    name: {
      type: String,
      default: null,
      required: true,
    },
    dayOfRegisteration: {
      type: String,
      default: '',
      required: true,
    },
    start: {
      type: String,
      default: null,
      required: true,
    },
    end: {
      type: String,
      default: null,
      required: false,
    },
    cost: {
      type: Number,
      default: 0,
      required: false,
      min: 0,
    },
    catering: {
      type: Schema.Types.ObjectId,
      ref: "UserProduct",
      default: null,
      required: false,
    },
    lockers: {
      type: String,
      default: '',
      required: false,
    },
    hasPlan: {
        type: Boolean,
        default: false,
        required: true,
    },
    planDiscount: {
      type: String,
      default: '',
      required: false,
    },
    copy: {
      type: Schema.Types.ObjectId,
      ref: "Copy",
      default: null,
      required: false,
    },
    total: {
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

module.exports = mongoose.model("Registeration", RegisterationSchema);
