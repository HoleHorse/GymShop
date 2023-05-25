import { Schema, model } from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

const userSchema = new Schema<User>({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
});

export default model<User>("User", userSchema);
