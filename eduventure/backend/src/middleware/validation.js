const { validationResult } = require('express-validator');

// Middleware to check validations and return errors if any
exports.validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Map validation errors to a more readable format
    const extractedErrors = errors.array().map(err => ({
      param: err.param,
      message: err.msg,
    }));

    return res.status(422).json({
      success: false,
      errors: extractedErrors,
    });
  }
  next();
};
