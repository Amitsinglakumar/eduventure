import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/eduventure';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true, (removed in latest mongoose)
      // useFindAndModify: false, (removed in latest mongoose)
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure code
  }
};

// Export the connection function to be used in the main server file
export default connectDB;
