import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login API call
    onLogin({ username });
    navigate("/");
  };

  return (
    <div className="form container">
      <div className="heading">Login</div>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <span className="sub">
          New Here? <a href="/register">Create Account</a>
        </span>
        <button className="login-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
