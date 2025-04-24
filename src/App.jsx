import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import LandingPage from "./components/LandingPage";
import ImageDetail from "./components/ImageDetail";
import LanguageSelector from "./components/LanguageSelector";
import Footer from "./components/Footer";
import i18n from "./i18n/config";
import "./App.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <LanguageSelector />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/image/:id" element={<ImageDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
