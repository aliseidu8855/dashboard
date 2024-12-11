import React from "react";
import "../styles/Home.css"; // Optional: Custom styles for the home page

const Home = () => {
  return (
    <div className="container">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-5 text-center">
          <h1 className="text-dark">Welcome to Your Dashboard!</h1>
          <p className="lead">
            This is your central hub where you can manage your profile, check
            analytics, and navigate to other sections of the app.
          </p>
          <div className="mt-4">
            <a className="btn btn-primary btn-lg mx-2" href="/profile">
              Go to Profile
            </a>
            <a className="btn btn-secondary btn-lg mx-2" href="/table">
              View Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
