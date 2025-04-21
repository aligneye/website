// src/pages/LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import googleLogo from '../assets/Google_Icons-09-512.webp';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      // @ts-ignore
      alert("Login failed: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      // @ts-ignore
      alert("Google login failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
          <input
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold">
            Login
          </button>
          <div className="text-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-xl bg-white text-gray-800 font-semibold border border-gray-300 flex justify-center items-center space-x-3"
            >
              <img src={googleLogo} alt="Google" className="w-6 h-6" />
              <span>Login with Google</span>
            </button>
          </div>
          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            Don't have an account? <span className="text-teal-500 hover:underline cursor-pointer" onClick={() => navigate("/signup")}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
