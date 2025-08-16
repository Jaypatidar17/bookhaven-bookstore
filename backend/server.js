const express = require('express');
const cors = require('cors');
require('dotenv').config();

const booksRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Complete CORS configuration for all possible ports
app.use(cors({
    origin: [
        'http://localhost:3000', // Create React App
        'http://localhost:5173', // Vite default
        'http://localhost:5174', // Vite port
        'http://localhost:5175', // Current Vite port
        'http://localhost:5176', // Future Vite port
        'http://localhost:5187', // Previous Vite port
        'http://127.0.0.1:5173',
        'http://127.0.0.1:5174',
        'http://127.0.0.1:5175',
        'https://bookhaven-bookstore-git-main-jay-patidars-projects.vercel.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    optionsSuccessStatus: 200
}));

// Handle preflight requests explicitly
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'BookHaven API is running!',
        timestamp: new Date().toISOString(),
        port: PORT
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📖 API available at: http://localhost:${PORT}`);
    console.log(`🌐 CORS enabled for multiple frontend ports`);
});