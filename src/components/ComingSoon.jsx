import React, { useState } from "react";
import "./ComingSoon.css";

const ComingSoon = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "123456") {
      setIsAuthenticated(true);
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="coming-soon">
      <h1>Coming Soon</h1>
      <div className="password-container">
        <button
          className="eye-button"
          onClick={() => setShowPasswordForm(!showPasswordForm)}
        >
          👁️
        </button>
        {showPasswordForm && (
          <form onSubmit={handleSubmit} className="password-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
            />
            <button type="submit" className="password-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
