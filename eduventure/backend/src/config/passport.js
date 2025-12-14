const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // Adjust path as needed
const bcrypt = require('bcrypt');

// Configure the LocalStrategy for email/password authentication
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Use email as username
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        // Find user by email (case-insensitive)
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        // Verify password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        // Success: return user object
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user id to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from id stored in session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
