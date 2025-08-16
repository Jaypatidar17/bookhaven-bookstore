import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to BookHaven
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Your gateway to endless literary adventures
          </p>
          <p className="text-lg mb-12 text-primary-200 max-w-2xl mx-auto">
            Discover thousands of books across all genres. From bestselling
            novels to academic texts, we have something for every reader. Start
            your reading journey today!
          </p>
          <div className="space-x-4">
            <Link
              to="/books"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Books
            </Link>
            <Link
              to="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
