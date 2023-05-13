import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { SetStateAction, useState } from "react";
import Input from "../../components/UI/input/Input";
import "./auth.style.scss";
import RedBtn from "../../components/UI/buttons/RedBtn";

function Login() {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const onEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Header></Header>
      <div
        className="background-container center"
        style={{ padding: 4 + "%", paddingBottom: 10 + "%" }}
      >
        <div className="columns is-mobile is-multiline is-centered">
          <div className="field center">
            <div className="column is-narrow">
              <div className="auth-form box p-5">
                <h1 className="has-text-white has-text-left is-size-1-desktop">
                  Sign In
                </h1>
                <div className="mt-5">
                  <Input
                    value={email}
                    onValueChange={onEmailChange}
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mt-5">
                  <Input
                    value={password}
                    onValueChange={onPasswordChange}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <RedBtn text="Sign In" href="/" />
                <p className="has-text-left mt-5">
                  Do not have an account? <a href="/register">Sign up now!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
