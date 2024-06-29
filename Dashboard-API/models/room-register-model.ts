import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RegisterRoomSchema = new Schema(
  {
    roomCode: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      default: null,
      required: true,
    },
    dayOfRegisteration: {
      type: String,
      default: '',
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
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    registeredFor: {
      type: String,
      default: '',
      required: false,
    },
    registeredBy: {
      type: String,
      default: '',
      required: true,
    },
    mobile: {
      type: String,
      default: '',
      required: true,
    },
    allowedToCancel: {
      type: Boolean,
      defualt: false,
      required: true
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

module.exports = mongoose.model("RegisterRoom", RegisterRoomSchema);
