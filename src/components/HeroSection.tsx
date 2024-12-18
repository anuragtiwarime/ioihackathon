import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

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
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            24-Hour Hackathon Challenge
          </h1>
          <p className="text-xl mb-8 text-white">
            Join us for an exciting hackathon where innovation meets opportunity
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Clock className="h-5 w-5" />
              <span>December 27th, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="h-5 w-5" />
              <span>PW Institute of Innovation</span>
            </div>
          </div>
          <CountdownTimer />
          <br />
          <a href="#register" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"> Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;