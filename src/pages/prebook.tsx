// src/pages/ComingSoonPage.tsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Assuming you want the Navbar here

export default function ComingSoonPage() {
  const targetDate = new Date();
  targetDate.setDate(23); // Set the target date to the 23rd of the current month
  targetDate.setHours(0, 0, 0, 0); // Set the time to midnight for precise countdown

  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetDate]);

  const getTimeString = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <div className="flex-grow flex items-center justify-center text-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold text-teal-600">Coming Soon!</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-900 dark:text-white">
            The pre-booking feature is coming soon! Stay tuned for updates.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-teal-600">Countdown to Launch:</h3>
            <div className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              {timeLeft > 0 ? (
                <span>{getTimeString(timeLeft)}</span> // Show the countdown time
              ) : (
                <span>The feature is now available!</span> // When countdown is over
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
