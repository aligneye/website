import { useEffect, useState } from "react";
import feature1 from "../assets/2.jpg";
import feature2 from "../assets/3.jpg";
import feature3 from "../assets/4.jpg";
import feature5 from "../assets/6.jpg";

const products = [
  { id: 1, name: "Feature1", image: feature1 },
  { id: 2, name: "Feature2", image: feature2 },
  { id: 3, name: "Feature3", image: feature3 },
  { id: 5, name: "Feature5", image: feature5 },
];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [paused, activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Why <span className="text-teal-600 dark:text-teal-400">AlignEye</span>?
        </h2>

        <div
          className="relative w-full flex justify-center items-center overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)`, width: `${products.length * 110}%` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0 flex pb-9 justify-center items-center">
                <div className="bg-white/90 dark:bg-gray-800/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center w-[400px] md:w-[500px] max-w-full h-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[500px] w-auto object-contain rounded-2xl transition-transform duration-1000"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute left-4 md:block hidden top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-4 rounded-full shadow-md hover:bg-gray-900/80 transition duration-300"
            onClick={prevSlide}
          >
            ❮
          </button>

          <button
            className="absolute right-4 md:block hidden  top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-4 rounded-full shadow-md hover:bg-gray-900/80 transition duration-300"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-teal-600 dark:bg-teal-400 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-teal-500 dark:hover:bg-teal-500"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
