const nodemailer = require('nodemailer');

exports.sendWelcomeEmail = async (userEmail, name) => {
  // Setup transporter using credentials from .env
  const transporter = nodemailer.createTransport({ /* ... */ });
  await transporter.sendMail({
    from: 'noreply@eduvplatform.com',
    to: userEmail,
    subject: 'Welcome to EduVenture!',
    text: `Hi ${name}, welcome aboard.`,
  });
};
