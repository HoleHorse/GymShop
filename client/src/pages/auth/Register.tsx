import { SetStateAction, useState } from "react";
import Input from "../../components/UI/input/Input";
import "./auth.style.scss";
import RedBtn from "../../components/UI/buttons/RedBtn";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleValidation = () => {
    const validationErrors: any = {};
    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format.";
    }
    if (!username) {
      validationErrors.username = "Username is required.";
    }
    if (!password) {
      validationErrors.password = "Password is required.";
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = "Password confirmation is required.";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!handleValidation()) return;

    fetch("http://localhost:5000/auth/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Success") {
          navigate("/login");
        } else {
          setErrors({ server: res.error || "Registration failed." });
        }
      });
  };

  return (
    <div
      className="background-container center"
      style={{ padding: "4%", paddingBottom: "10%" }}
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
                  value={username}
                  onValueChange={(e: any) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                />
                {errors.username && (
                  <p className="error-message">{errors.username}</p>
                )}
              </div>
              <div className="mt-5">
                <Input
                  value={email}
                  onValueChange={(e: any) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="mt-5">
                <Input
                  value={password}
                  onValueChange={(e: any) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>
              <div className="mt-5">
                <Input
                  value={confirmPassword}
                  onValueChange={(e: any) =>
                    setConfirmPassword(e.target.value)
                  }
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <p className="error-message">{errors.confirmPassword}</p>
                )}
              </div>
              {errors.server && (
                <p className="error-message">{errors.server}</p>
              )}
              <RedBtn text="Sign Up" onClick={handleSubmit} />
              <p className="has-text-left mt-5">
                Already have an account? <a href="/login">Sign in!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
