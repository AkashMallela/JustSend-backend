import { Schema, Types, model } from "mongoose";

const emailSchema = new Schema({
  user:{
    type: Types.ObjectId,
    required: true,
  },
  to: {
    type: String,
    required: true
  },
  templateAlias: {
    type: String,
    required: true
  },
  templateModel:{
    type: Object,
    required: true
  },
  messageId:{
    type: String,
    required: true
  },
  submittedAt:{
    type: Date,
    required: true
  }
});
export default  model('email',emailSchema);