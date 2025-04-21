// src/App.tsx
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSlider from './components/ProductSlider';
import AboutSection from './components/about';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function Layout() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const hideFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} handleLogout={logout} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductSlider />
              <AboutSection />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
