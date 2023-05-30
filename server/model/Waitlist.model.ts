import { model, models, Schema } from 'mongoose';
import validator from 'validator';

const WaitlistSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
  },
  {
    timestamps: true,
  }
);

const Waitlist = models.Email || model('Email', WaitlistSchema);
export default Waitlist;
