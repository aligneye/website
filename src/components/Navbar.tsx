// src/components/Navbar.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import icon from "../assets/icon.png";
import aligneyeLogo from "../assets/aligneyeFinalLogo.png";

interface NavbarProps {
  user: any;
  handleLogout: () => void;
}

export default function Navbar({ user, handleLogout }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8 cursor-pointer" onClick={handleLogoClick}>
            <img src={icon} alt="AlignEye Icon" className="w-10" />
            <img src={aligneyeLogo} alt="AlignEye Logo" className="w-40" />
          </div>

          {!isAuthPage && (
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-teal-500" /> : <Moon className="w-5 h-5 text-teal-700" />}
              </button>

              {user ? (
                <button onClick={handleLogout} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-xl">
                  Logout
                </button>
              ) : (
                location.pathname !== "/login" && (
                  <button onClick={() => navigate("/login")} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-xl">
                    Login
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
