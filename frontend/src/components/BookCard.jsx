import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="aspect-w-3 aspect-h-4 bg-gray-200">
        <img
          src={
            book.image ||
            "https://via.placeholder.com/300x400/cccccc/666666?text=Book"
          }
          alt={book.title}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-gray-600 mb-2">by {book.author}</p>
        <p className="text-2xl font-bold text-primary-600 mb-4">
          ${book.price}
        </p>
        <Link
          to={`/books/${book.id}`}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md font-medium transition-colors inline-block text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
