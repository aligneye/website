import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-4">AlignEye</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              AlignEye is more than just glasses; we redefine how you see the world. 
              Experience clarity with our finely crafted eyewear that blends style and functionality.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/journey" className="footer-link">Journey</a></li>
              <li><a href="/blogs" className="footer-link">Blogs</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
              <li><a href="/policy" className="footer-link">Our Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="footer-link">Terms of Use</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/warranty" className="footer-link">Warranty Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 AlignEye | The Visionary Choice
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="social-link"><Facebook /></a>
              <a href="#" className="social-link"><Instagram /></a>
              <a href="#" className="social-link"><Twitter /></a>
              <a href="#" className="social-link"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}