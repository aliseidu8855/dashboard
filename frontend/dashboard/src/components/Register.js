import React, { useState } from "react";
import "../styles/login.css"; 
import "../styles/styles.css";
import "../styles/register.css";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration API call
    console.log("Registered:", formData);
    setErrors(null); // Clear errors on success
  };

  return (
    <div className="form container">
      <div className="heading">Create Account</div>
      {errors && (
        <div className="alert alert-warning alert-dismissible fade show">
          {errors}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          required
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <span className="sub">
          Already have an account? <a href="/login">Sign in</a>
        </span>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;

