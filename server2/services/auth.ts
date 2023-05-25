import User, { authData } from "../models/user";
import bcrypt from "bcrypt";

type Message = {
  message: string;
};

export const Login = async (authData: authData): Promise<[number, Message]> => {
  try {
    const candidate = await User.findOne({ email: authData.email });
    if (!candidate) {
      return [400, { message: "User not found" }];
    }
    const compare = await bcrypt.compare(authData.password, candidate.password);
    if (!compare) {
      return [400, { message: "Incorrect password" }];
    }
    return [200, { message: "Success" }];
  } catch (e) {
    console.log(e);
    return [500, { message: "Error" }];
  }
};

export const Register = async (
  authData: authData
): Promise<[number, Message]> => {
  try {
    const hashedPassword = await bcrypt.hash(authData.password, 8);
    const user = new User({
      name: "Anonymous",
      email: authData.email,
      password: hashedPassword,
    });
    await user.save();
    return [200, { message: "Success" }];
  } catch (e) {
    console.log(e);
    return [500, { message: "Error" }];
  }
};

export const Logout = async () => {
  return "logout";
};
