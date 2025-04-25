import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import LandingPage from "./components/LandingPage";
import ImageDetail from "./components/ImageDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import i18n from "./i18n/config";
import "./App.css";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/location/:id" element={<ImageDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
