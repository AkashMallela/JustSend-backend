import { Schema, Types, model } from "mongoose";

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  sentMails:[{
    type: Types.ObjectId,
    ref: "email"
  }]
},{
  timestamps: true
});

export default model("user", userSchema);