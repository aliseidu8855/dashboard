import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Logging in with data:", formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                {/* Left Side with Background Image */}
                <div className="col-lg-6 d-none d-lg-flex">
                  <div
                    className="flex-grow-1 bg-login-image"
                    style={{
                      backgroundImage: 'url("../assets/img/dogs/image3.jpeg")',
                    }}
                  ></div>
                </div>

                {/* Login Form */}
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="text-dark mb-4">Welcome Back!</h4>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      {/* Email Input */}
                      <div className="mb-3">
                        <input
                          className="form-control form-control-user"
                          type="email"
                          placeholder="Enter Email Address..."
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Password Input */}
                      <div className="mb-3">
                        <input
                          className="form-control form-control-user"
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Remember Me Checkbox */}
                      <div className="mb-3">
                        <div className="custom-checkbox small">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                              name="rememberMe"
                              checked={formData.rememberMe}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        className="btn btn-primary d-block btn-user w-100"
                        type="submit"
                      >
                        Login
                      </button>
                      <hr />

                      {/* Social Media Buttons */}
                      <button
                        className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                        type="button"
                      >
                        <i className="fab fa-google"></i>&nbsp; Login with Google
                      </button>
                    </form>

                    {/* Links */}
                    <div className="text-center">
                      <a className="small" href="/forgot-password">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/register">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
