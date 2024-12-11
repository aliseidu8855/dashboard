import React, { useState } from "react";
import "../styles/Register.css"; // Optional: Custom styles for the register page

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Registering user with data:", formData);
  };

  return (
    <div className="container">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-0">
          <div className="row">
            {/* Left Side with Background Image */}
            <div className="col-lg-5 d-none d-lg-flex">
              <div
                className="flex-grow-1 bg-register-image"
                style={{
                  backgroundImage: 'url("/assets/img/dogs/image2.jpeg")',
                }}
              ></div>
            </div>

            {/* Registration Form */}
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">Create an Account!</h4>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  {/* First Name and Last Name */}
                  <div className="row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <input
                      className="form-control form-control-user"
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Password and Confirm Password */}
                  <div className="row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control form-control-user"
                        type="password"
                        placeholder="Repeat Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="btn btn-primary d-block btn-user w-100"
                    type="submit"
                  >
                    Register Account
                  </button>

                  <hr />

                  {/* Social Media Buttons */}
                  <a
                    className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                    href="#"
                  >
                    <i className="fab fa-google"></i>&nbsp; Register with Google
                  </a>
                  <a
                    className="btn btn-primary d-block btn-facebook btn-user w-100"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>&nbsp; Register with
                    Facebook
                  </a>
                </form>

                {/* Links */}
                <div className="text-center">
                  <a className="small" href="/forgot-password">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a className="small" href="/login">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
