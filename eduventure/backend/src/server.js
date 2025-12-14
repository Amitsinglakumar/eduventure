const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport'); // Your passport config
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

const connectDB = require('./db');

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));
app.use(express.json());

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production', httpOnly: true },
  })
);

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
connectDB();

// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'EduVenture API is running!' });
});

// Import and use your routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/gamification', require('./routes/gamification'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/users', require('./routes/users'));

// Error handling middleware (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
