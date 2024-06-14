// import { AuthPage } from "@refinedev/mui";

// export const Login = () => {
//   return (
//     <AuthPage
//       type="login"
//       formProps={{
//         defaultValues: { email: "demo@refine.dev", password: "demodemo" },
//       }}
//     />
//   );
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedEmail = "test@example.com";
    const hardcodedPassword = "asdf123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  function handleEmailLogin() {
    navigate("/dashboard");
  }
  function handleFacebookLogin() {
    navigate("/dashboard");
  }

  return (
    <div className="login-container-full">
      <div className="login-container">
        <h2>User Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <p className="or_diff">
        <span>OR</span>
      </p>
      <div
        className="
      row"
      >
        <button onClick={handleEmailLogin}>Sign in with Email</button>
        <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
      </div>
    </div>
  );
}

export default Login;
