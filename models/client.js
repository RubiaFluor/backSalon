const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const clientSchema = mongoose.Schema(
  {
    nameClient: {
      type: String,
      trim: true,
      required: true,
      maxlength: 50,
    },
    nameCoiffeur: {
      type: String,
      trim: true,
      required: true,
      maxlength: 50,
    },
    numberTicket: {
      type: Number,
      default: 0,
      required: true,
    },
    numberVoucher: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
)

const Client = mongoose.model("Client", clientSchema);

module.exports = { Client }
