import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      defualt: '',
      required: true,
      unique: true
    },
    studyAt: {
      type: String,
      defualt: '',
      required: true,
    },
    id: {
      type: String,
      defualt: '',
      required: true,
      unique: true
    },
    mobile: {
      type: String,
      defualt: '',
      required: true,
    },
    email: {
      type: String,
      defualt: '',
      required: false,
    },
    graduated: {
      type: Boolean,
      defualt: false,
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

module.exports = mongoose.model("Client", ClientSchema);
