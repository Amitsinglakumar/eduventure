import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import aiRoutes from './routes/aiRoutes';
import gamificationRoutes from './routes/gamificationRoutes';
import contentRoutes from './routes/contentRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/gamification', gamificationRoutes);
app.use('/api/content', contentRoutes);

app.get('/', (req, res) => {
    res.send('Eduventure Backend Running');
});

// Database Connection
mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
