import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/books/${id}`
        );
        setBook(response.data);
      } catch (err) {
        setError("Book not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Book Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The book you're looking for doesn't exist.
          </p>
          <Link
            to="/books"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Browse All Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={
              book.image ||
              "https://via.placeholder.com/400x600/cccccc/666666?text=Book"
            }
            alt={book.title}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {book.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">by {book.author}</p>
          <div className="bg-primary-50 p-6 rounded-lg mb-8">
            <p className="text-3xl font-bold text-primary-600">${book.price}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
              <p className="text-gray-600">{book.category}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pages</h4>
              <p className="text-gray-600">{book.pages}</p>
            </div>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
              Add to Cart
            </button>
            <Link
              to="/books"
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-md font-medium transition-colors inline-block text-center"
            >
              Back to Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
