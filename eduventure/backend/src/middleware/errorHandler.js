// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // If the error has a status code, use it, otherwise default to 500
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Customize error response in production vs development
  if (process.env.NODE_ENV === 'production') {
    // In production, do not expose stack trace
    res.status(statusCode).json({
      success: false,
      message,
    });
  } else {
    // In development, include stack trace for debugging
    res.status(statusCode).json({
      success: false,
      message,
      stack: err.stack,
    });
  }
};

module.exports = errorHandler;
