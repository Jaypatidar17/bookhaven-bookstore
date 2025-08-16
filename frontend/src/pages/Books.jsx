import React from "react";
import BookList from "../components/BookList";

const Books = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Books</h1>
        <p className="text-lg text-gray-600">
          Browse our complete collection of books
        </p>
      </div>
      <BookList />
    </div>
  );
};

export default Books;
