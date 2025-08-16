const express = require('express');
const router = express.Router();

// Dummy books data
const books = [{
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        category: "Classic Literature",
        pages: 180,
        description: "A timeless American classic that explores themes of wealth, love, idealism, and moral decay in the Jazz Age. Set in the summer of 1922, it follows Nick Carraway's observations of his mysterious neighbor Jay Gatsby and Gatsby's obsession with his lost love Daisy Buchanan.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
        category: "Classic Literature",
        pages: 324,
        description: "A gripping tale of racial injustice and the loss of innocence in the American South. Through the eyes of Scout Finch, we witness her father Atticus defend a black man falsely accused of rape, while learning about empathy, morality, and courage.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 13.99,
        category: "Dystopian Fiction",
        pages: 328,
        description: "A chilling dystopian novel that presents a world of perpetual war, omnipresent government surveillance, and public manipulation. Winston Smith's struggle against totalitarian control remains one of the most powerful warnings about authoritarianism ever written.",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 11.99,
        category: "Romance",
        pages: 432,
        description: "A witty and romantic novel that follows the complex relationship between Elizabeth Bennet and Mr. Darcy. Set in Georgian England, it explores themes of love, marriage, social class, and the importance of looking beyond first impressions.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop"
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 15.99,
        category: "Coming of Age",
        pages: 277,
        description: "A controversial and influential novel narrated by teenager Holden Caulfield during his few days in New York City. The story captures the angst and alienation of adolescence while critiquing the phoniness of adult society.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        price: 16.99,
        category: "Fantasy",
        pages: 309,
        description: "The magical beginning of Harry Potter's journey from an unwanted boy living under the stairs to a celebrated wizard at Hogwarts School of Witchcraft and Wizardry. A tale of friendship, courage, and the power of love conquering evil.",
        image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop"
    },
    {
        id: 7,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: 24.99,
        category: "Fantasy",
        pages: 1216,
        description: "An epic high fantasy novel that follows the journey of Frodo Baggins and the Fellowship as they attempt to destroy the One Ring and defeat the Dark Lord Sauron. A masterpiece of world-building and storytelling that defined modern fantasy literature.",
        image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop"
    },
    {
        id: 8,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        price: 13.99,
        category: "Science Fiction",
        pages: 224,
        description: "A hilarious science fiction comedy that follows Arthur Dent's adventures through space after Earth is destroyed to make way for a hyperspace bypass. Packed with wit, absurdity, and profound insights about life, the universe, and everything.",
        image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=400&fit=crop"
    }
];

// GET /api/books - Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// GET /api/books/:id - Get single book
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
});

module.exports = router;