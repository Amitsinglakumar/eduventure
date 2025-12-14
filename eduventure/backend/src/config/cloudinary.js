import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // Load env vars from .env

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // Your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY,         // Your Cloudinary API key
  api_secret: process.env.CLOUDINARY_API_SECRET,   // Your Cloudinary API secret
  secure: true,                                    // Use secure HTTPS URLs
});

export default cloudinary;
