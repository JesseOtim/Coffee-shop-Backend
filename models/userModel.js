import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },

  password: {
    type: String,
  },
  
});

const User = mongoose.model("user", userSchema);

export default User;
