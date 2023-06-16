import User, { authData } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secret = process.env.SECRET || "4ewr#$FDVt4FH46";

export const Login = async (authData: authData): Promise<[number, string]> => {
  try {
    const candidate = await User.findOne({ email: authData.email });
    if (!candidate) {
      return [400, "User not found"];
    }
    const compare = await bcrypt.compare(authData.password, candidate.password);
    if (!compare) {
      return [400, "Incorrect password"];
    }
    const token = jwt.sign({ _id: candidate._id.toString() }, secret);
    return [200, token];
  } catch (e) {
    console.log(e);
    return [500, "Error"];
  }
};

export const Register = async (
  authData: authData
): Promise<[number, string]> => {
  try {
    const hashedPassword = await bcrypt.hash(authData.password, 8);
    const user = new User({
      name: "Anonymous",
      email: authData.email,
      password: hashedPassword,
    });
    await user.save();
    return [200, "Success"];
  } catch (e) {
    return [500, "Error"];
  }
};

export const Logout = async (): Promise<[number, string]> => {
  try {
    return [200, "Success"];
  } catch (e) {
    return [500, "Error"];
  }
};
