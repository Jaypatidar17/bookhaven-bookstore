const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [];

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const addTestUser = async() => {
    try {
        const hashedPassword = await bcrypt.hash('test123', 10);
        users.push({
            id: 999,
            name: "Test User",
            email: "test@test.com",
            password: hashedPassword
        });
        console.log("✅ Test user added: test@test.com / test123");
        console.log("👥 Total users:", users.length);
    } catch (error) {
        console.log("❌ Error adding test user:", error.message);
    }
};

addTestUser();

router.post('/signup', async(req, res) => {
    try {
        console.log("🆕 SIGNUP REQUEST RECEIVED");
        console.log("📨 Request Body:", req.body);
        console.log("📋 Content-Type:", req.headers['content-type']);

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            console.log("❌ Missing fields - Name:", !!name, "Email:", !!email, "Password:", !!password);
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            console.log("❌ User already exists:", email);
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: users.length + 1,
            name,
            email,
            password: hashedPassword
        };
        users.push(newUser);

        console.log("✅ User created successfully:", { id: newUser.id, email: newUser.email });
        console.log("👥 Total users now:", users.length);

        // Generate JWT token
        const token = jwt.sign({ userId: newUser.id, email: newUser.email },
            JWT_SECRET, { expiresIn: '24h' }
        );

        res.status(201).json({
            message: 'User created successfully',
            token,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error) {
        console.log("💥 Signup error:", error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.post('/login', async(req, res) => {
    try {
        console.log("🔐 LOGIN REQUEST RECEIVED");
        console.log("📨 Request Body:", req.body);
        console.log("📋 Content-Type:", req.headers['content-type']);
        console.log("👥 Available users:", users.map(u => ({ id: u.id, email: u.email, name: u.name })));

        const { email, password } = req.body;

        if (!req.body || Object.keys(req.body).length === 0) {
            console.log("❌ Empty request body");
            return res.status(400).json({ message: 'Request body is empty' });
        }

        if (!email || !password) {
            console.log("❌ Missing fields - Email:", !!email, "Password:", !!password);
            console.log("❌ Received email:", email, "Received password:", password ? "***" : "undefined");
            return res.status(400).json({
                message: 'Email and password are required',
                received: {
                    email: email || 'missing',
                    password: password ? 'provided' : 'missing'
                }
            });
        }

        console.log("🔍 Searching for user with email:", email);

        const user = users.find(user => user.email === email);
        if (!user) {
            console.log("❌ User not found with email:", email);
            console.log("📋 Available emails:", users.map(u => u.email));
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log("👤 User found:", { id: user.id, email: user.email, name: user.name });

        console.log("🔒 Checking password...");
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.log("❌ Invalid password for user:", email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log("✅ Password is valid!");

        const token = jwt.sign({ userId: user.id, email: user.email },
            JWT_SECRET, { expiresIn: '24h' }
        );

        console.log("🎟️ JWT token generated successfully");
        console.log("✅ Login successful for:", email);

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log("💥 Login error:", error.message);
        console.log("💥 Full error:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;