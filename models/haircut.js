const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const haircutSchema = mongoose.Schema({
  typeHairCut: {
    type: String,
    maxlength: 20,
  },
  amountClient: {
    type: Number,
  },
  increaseClient: {
    type: Number,
  },
  ClientId: {
    type: ObjectId,
    ref: "Client",
  }
  },
  {timestamps:true}
)

const hairCut = mongoose.model("HairCut", haircutSchema);

module.exports = {hairCut}
