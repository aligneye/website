import { ShoppingBag } from 'lucide-react';
import aligneye from "../assets/1.jpg"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center mt-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMjAwIiB5Mj0iMjAwIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMkE4QjhCIiBzdG9wLW9wYWNpdHk9IjAuMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzJBOEI4QiIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhZCkiLz48L3N2Zz4=')] opacity-30 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white/40 to-white/80 dark:from-gray-900/90 dark:via-gray-800/50 dark:to-gray-900/90 transition-colors duration-300" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mt-20 md:mt-0 md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            More Than Just
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">
              Glasses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-xl leading-relaxed">
            Discover eyewear that combines style, comfort, and clarity. Experience vision like never before.
          </p>
          <button className="btn-primary inline-flex items-center space-x-3 text-lg px-10 py-5 rounded-xl">
            <ShoppingBag className="w-6 h-6" />
            <span>Shop Now</span>
          </button>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent dark:from-teal-400/20 rounded-3xl transform rotate-6 scale-95" />
          <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/20 to-transparent dark:from-teal-400/20 rounded-3xl transform -rotate-6 scale-95" />
          <img
            src={aligneye}
            alt="Premium Eyewear"
            className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl hover:scale-102 transition-all duration-700 z-10"
          />
        </div>
      </div>
    </div>
  );
}