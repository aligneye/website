import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import icon from "../assets/icon.png";
import aligneyeLogo from "../assets/aligneyeFinalLogo.png";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [hovered, setHovered] = useState(null); // To track hovered button
  const [showComingSoon, setShowComingSoon] = useState(false); // To track the visibility of the "Coming Soon" message
  // @ts-ignore
  const handleMouseEnter = (button) => {
    setHovered(button);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group transform transition-transform duration-300 hover:scale-95">
              <div className="flex items-center p-2 ">
                <img 
                  src={icon} 
                  alt="AlignEye Icon" 
                  className="w-12 h-auto"
                />
              </div>
              <img 
      src={aligneyeLogo} 
      alt="AlignEye Eyewear" 
      className="w-48 " // Moves the logo 10px to the left
    />
            </div>
            {/* <div className="hidden md:flex pl-36 space-x-8">
              <a
                href="/"
                className="nav-link"
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </a>
              <a
                href="/store"
                className="nav-link"
                onMouseEnter={() => handleMouseEnter('store')}
                onMouseLeave={handleMouseLeave}
              >
                {hovered === 'store' ? 'Coming Soon' : 'Store'}
              </a>
              <a
                href="/blogs"
                className="nav-link"
                onMouseEnter={() => handleMouseEnter('blogs')}
                onMouseLeave={handleMouseLeave}
              >
                {hovered === 'blogs' ? 'Coming Soon' : 'Blogs'}
              </a>
              <a
                href="/journey"
                className="nav-link"
                onMouseEnter={() => handleMouseEnter('journey')}
                onMouseLeave={handleMouseLeave}
              >
                {hovered === 'journey' ? 'Coming Soon' : 'Journey'}
              </a>
            </div> */}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-teal-500" />
              ) : (
                <Moon className="w-5 h-5 text-teal-700" />
              )}
            </button>

            {/* <button
              className="btn-secondary relative cursor-pointer"
              onMouseEnter={() => setShowComingSoon(true)}
              onMouseLeave={() => setShowComingSoon(false)}
            >
              Login
              {showComingSoon && (
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs bg-gray-700 text-white p-1 rounded">
                  Coming Soon
                </div>
              )}
            </button>
            
            <button
              className="btn-primary relative cursor-pointer"
              onMouseEnter={() => setShowComingSoon(true)}
              onMouseLeave={() => setShowComingSoon(false)}
            >
              Sign Up
              {showComingSoon && (
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs bg-gray-700 text-white p-1 rounded">
                  Coming Soon
                </div>
              )}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
