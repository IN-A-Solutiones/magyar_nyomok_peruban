import React, { useState } from "react";
import "./ComingSoon.css";

const ComingSoon = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (attempts >= 3) {
      setErrorMessage(
        "Túl sok sikertelen próbálkozás. Kérjük, próbáld újra később."
      );
      return;
    }

    if (password === import.meta.env.VITE_APP_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setAttempts((prev) => prev + 1);
      const remainingAttempts = 3 - attempts - 1;
      setErrorMessage(
        `Hibás jelszó. Még ${remainingAttempts} próbálkozásod van.`
      );
      setPassword("");
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
              disabled={attempts >= 3}
            />
            <button
              type="submit"
              className="password-button"
              disabled={attempts >= 3}
            >
              Submit
            </button>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
