import React from "react";
import Hero from "../components/Hero";
import BookList from "../components/BookList";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-gray-600">
            Discover our handpicked selection of amazing reads
          </p>
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default Home;
