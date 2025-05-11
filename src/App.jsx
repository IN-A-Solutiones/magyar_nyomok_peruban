import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import LandingPage from "./components/LandingPage";
import ImageDetail from "./components/ImageDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import i18n from "./i18n/config";
import "./App.css";
import { useTranslation } from "react-i18next";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Language route wrapper
const LanguageRoute = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentLang = i18n.language;

  // If the URL doesn't start with the current language code, redirect
  if (!currentPath.startsWith(`/${currentLang}`) && currentPath !== "/") {
    return <Navigate to={`/${currentLang}${currentPath}`} replace />;
  }

  return children;
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <div>
          <Navbar />
          <Routes>
            {/* Default route - redirects to current language */}
            <Route
              path="/"
              element={<Navigate to={`/${i18n.language}`} replace />}
            />

            {/* Language-specific routes */}
            <Route
              path="/:lang"
              element={
                <LanguageRoute>
                  <LandingPage />
                </LanguageRoute>
              }
            />

            <Route
              path="/:lang/location/:id"
              element={
                <LanguageRoute>
                  <ImageDetail />
                </LanguageRoute>
              }
            />

            {/* Catch all - redirect to current language */}
            <Route
              path="*"
              element={<Navigate to={`/${i18n.language}`} replace />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
