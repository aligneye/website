import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import icon from '../assets/icon.png'
import aligneyeLogo from '../assets/aligneyeFinalLogo.png'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

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
              className="w-48 h-auto hidden md:block"
            />
          </div>
            <div className="hidden md:flex pl-36 space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="/store" className="nav-link">Store</a>
              <a href="/blogs" className="nav-link">Blogs</a>
              <a href="/journey" className="nav-link">Journey</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-teal-500" />
              ) : (
                <Moon className="w-5 h-5 text-teal-700" />
              )}
            </button>
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}