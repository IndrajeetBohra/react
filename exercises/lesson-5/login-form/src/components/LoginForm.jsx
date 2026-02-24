import { useState } from "react";
import "./LoginForm.css";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  return (
    <>
      <div>
        <input placeholder="Email" className="login-input" />
      </div>
      <div>
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          className="login-input"
        />
        <button className="show-button" onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button className="login-button">Login</button>
      <button className="login-button">Sign Up</button>
    </>
  );
}
