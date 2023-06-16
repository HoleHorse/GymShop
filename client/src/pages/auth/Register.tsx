import { SetStateAction, useState } from "react";
import Input from "../../components/UI/input/Input";
import "./auth.style.scss";
import RedBtn from "../../components/UI/buttons/RedBtn";
import { useNavigate } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    fetch("http://localhost:5000/auth/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Success") {
          navigate("/login");
        } else {
        }
      });
  };

  return (
    <>
      <div
        className="background-container center"
        style={{ padding: 4 + "%", paddingBottom: 10 + "%" }}
      >
        <div className="columns is-mobile is-multiline is-centered">
          <div className="field center">
            <div className="column is-narrow">
              <div className="auth-form box p-5">
                <h1 className="has-text-white has-text-left is-size-1-desktop is-size-3-tablet is-size-3-mobile">
                  Sign Up
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
                <RedBtn text="Sign Up" onClick={handleSubmit} />
                <p className="has-text-left mt-5">
                  ALready have an account? <a href="/login">Sign in!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
