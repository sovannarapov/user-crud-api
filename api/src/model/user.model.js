import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      max: 255,
      min: 6,
    },
    last_name: {
      type: String,
      required: true,
      max: 255,
      min: 6,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6,
    },
  },
  {
    timestamps: {
      createdDate: 'created_at',
      updatedDate: 'updated_at'
    }
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
}

const User = model("users", userSchema);

export default User;
