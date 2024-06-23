import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Actor = new Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Actor", Actor);
