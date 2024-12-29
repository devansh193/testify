import React from "react";

const NightSky: React.FC = () => {
  // Function to generate random star positions
  const generateStars = (count: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Array.from({ length: count }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() < 0.8 ? "h-0.5 w-0.5" : "h-1 w-1 sm:h-1.5 sm:w-1.5",
    }));
  };

  const stars = generateStars(50); // Increased from 10 to 50 stars

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 opacity-70">
        {stars.map((star, index) => (
          <div
            key={index}
            className={`absolute ${star.size} rounded-full bg-white`}
            style={{ left: star.left, top: star.top }}
          ></div>
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 grid-rows-3 gap-px">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border border-white border-opacity-20"></div>
        ))}
      </div>

      {/* Gradient mask for grid */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
    </div>
  );
};

export default NightSky;
