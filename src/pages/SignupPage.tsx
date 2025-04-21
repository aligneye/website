// src/pages/SignupPage.tsx
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err) {
      // @ts-ignore
      alert("Signup Failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>
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
          <button
            onClick={signup}
            className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            Already have an account? <span className="text-teal-500 hover:underline cursor-pointer" onClick={() => navigate("/login")}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
}
