import User from "../models/user"

export const Login = (user: User) => {
  user.save()
  return "login";
};

export const Register = () => {
  return "register";
};

export const Logout = () => {
  return "logout";
};
