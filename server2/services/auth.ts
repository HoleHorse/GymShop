import User, { authData } from "../models/user";
import bcrypt from "bcrypt";

export const Login = async (authData: authData): Promise<[number, string]> => {
  try {
    const candidate = await User.findOne({ email: authData.email });
    if (candidate) {
      const compare = await bcrypt.compare(
        candidate.password,
        authData.password
      );
    }
    return [200, "Success"];
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
    console.log(e);
    return [500, "Error"];
  }
};

export const Logout = async () => {
  return "logout";
};
