import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              24-Hour Hackathon Challenge
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
            Join us for an exciting hackathon where innovation meets opportunity.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-3 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg text-white">
              <Clock className="h-6 w-6" />
              <span className="text-lg">December 27th, 2024</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg text-white">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">PW Institute of Innovation</span>
            </div>
          </div>

          {/* Live Now Badge */}
          <div className="mb-8">
            <span className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md animate-pulse">
              Live Now
            </span>
          </div>

          {/* Register Button */}
          <a
            href="https://pw.jotform.com/243601714263046"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
            target="_blank"
          >
            Submit Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
