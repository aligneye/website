import { useEffect, useState } from "react";
import aboutimage1 from "../assets/WhatsApp Image 2025-04-05 at 00.58.20.jpeg"; // Replace with your actual images
import aboutimage2 from "../assets/WhatsApp Image 2025-04-05 at 01.05.38.jpeg";
import aboutimage3 from "../assets/Untitled design_20250405_020409_0000.jpg";

const images = [aboutimage1, aboutimage2, aboutimage3]; // Array of images

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          About <span className="text-teal-600 dark:text-teal-400">AlignEye</span> Vision Private Limited
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Overview */}
          <div className="flex flex-col justify-center items-start space-y-4">
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-5">
              AlignEye Vision Private Limited is a pioneering technology company specializing in motion tracking and eye tracking solutions. We leverage cutting-edge sensor technology and intelligent algorithms to create innovative products that enhance healthcare and fitness experiences.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our goal is to improve human well-being by developing wearable solutions that help users monitor and optimize their posture, movement, and eye health. Whether it’s preventing posture-related issues, enhancing fitness routines, or reducing digital eye strain, we empower individuals with real-time insights and actionable feedback.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Focus Areas
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">1. Healthcare Solutions</h4>
                <ul className="list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Posture Correction & Ergonomics: Our wearable devices track body posture and provide feedback to prevent musculoskeletal disorders caused by poor sitting or standing habits.</li>
                  <li>Eye Health Monitoring: We develop smart eyewear that monitors eye strain, screen time, and blinking patterns to help reduce digital fatigue and improve visual comfort.</li>
                  <li>Drowsiness Detection: Our technology detects early signs of drowsiness and provides timely alerts, enhancing safety for drivers and professionals who require sustained focus.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">2. Fitness & Wellness</h4>
                <ul className="list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Smart Motion Tracking: Our advanced motion sensors accurately track movements, ensuring users maintain correct form during exercises, yoga, and rehabilitation workouts.</li>
                  <li>Personalized Training: Through real-time motion analysis, we provide adaptive feedback to improve performance, prevent injuries, and enhance workout efficiency.</li>
                  <li>Activity Monitoring: From tracking sitting versus standing time to analyzing movement patterns, we help users develop healthier habits effortlessly.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Why AlignEye?
            </h3>
            <ul className="list-inside pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Cutting-Edge Sensor Technology:</strong> We integrate eye-tracking, motion-tracking, and AI-driven insights to deliver unparalleled accuracy.</li>
              <li><strong>Wearable & User-Friendly Designs:</strong> Our products seamlessly fit into daily life, ensuring maximum comfort and usability.</li>
              <li><strong>Data-Driven Health Insights:</strong> We provide actionable feedback through connected mobile applications, allowing users to track progress over time.</li>
              <li><strong>Impact-Driven Innovation:</strong> We prioritize preventive healthcare and performance optimization, helping individuals live healthier and more productive lives.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              At AlignEye, we believe that technology should work for your well-being. Whether you're a fitness enthusiast, a working professional, or someone looking to improve your posture and eye health, our solutions are designed to make a real difference in your life.
            </p>
          </div>

          {/* Sliding Images */}
          <div className="flex justify-center items-center overflow-hidden relative">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg" // Ensure the images are square and cover the container
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
