import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Music, Gamepad2, Star } from 'lucide-react';
import StoryReader from '../components/Kindergarten/StoryReader';

import { useNavigate } from 'react-router-dom';

const Kindergarten = () => {
    const navigate = useNavigate();
    const [selectedStory, setSelectedStory] = useState<{ title: string, pages: any[] } | null>(null);

    const stories = [
        {
            title: "The Brave Little Rabbit",
            color: "bg-orange-400",
            icon: "🐰",
            pages: [
                { text: "Once upon a time, there was a little rabbit named Hop.", image: "rabbit1.jpg" },
                { text: "Hop loved to jump higher than anyone else!", image: "rabbit2.jpg" },
                { text: "One day, he jumped all the way to the moon...", image: "rabbit3.jpg" }
            ]
        },
        {
            title: "The Friendly Cloud",
            color: "bg-blue-400",
            icon: "☁️",
            pages: [
                { text: "Cloudy was a fluffy white cloud.", image: "cloud1.jpg" },
                { text: "He liked to make shapes in the sky.", image: "cloud2.jpg" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFF5F7] p-4 md:p-8">
            {/* Fun Header */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-12 relative"
            >
                <div className="absolute top-0 left-1/4 animate-bounce delay-100 text-4xl">⭐</div>
                <div className="absolute top-10 right-1/4 animate-bounce delay-700 text-4xl">🎈</div>

                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-comic filter drop-shadow-sm">
                    EduVenture Kids
                </h1>
                <p className="text-xl text-pink-400 mt-4 font-bold tracking-wide">Learn, Play, and Grow! 🚀</p>
            </motion.div>

            {/* Main Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                {/* Stories Section */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl border-4 border-orange-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-orange-100 rounded-full text-orange-500">
                            <Book size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-700">Stories</h2>
                    </div>

                    <div className="space-y-4">
                        {stories.map((story, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedStory(story)}
                                className="group cursor-pointer bg-orange-50 hover:bg-orange-100 p-4 rounded-2xl transition-all border-2 border-transparent hover:border-orange-300 flex items-center gap-4"
                            >
                                <span className="text-4xl group-hover:scale-110 transition-transform">{story.icon}</span>
                                <div>
                                    <h3 className="font-bold text-slate-700 text-lg">{story.title}</h3>
                                    <div className="flex gap-1 mt-1">
                                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Poems Section */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl border-4 border-purple-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-purple-100 rounded-full text-purple-500">
                            <Music size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-700">Poems</h2>
                    </div>

                    <div className="p-8 text-center bg-purple-50 rounded-2xl border-2 border-dashed border-purple-300">
                        <p className="text-purple-400 font-medium">Coming Soon!</p>
                        <p className="text-sm text-slate-400 mt-2">New rhymes are being written...</p>
                    </div>
                </motion.div>

                {/* Games Section */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl border-4 border-green-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-green-100 rounded-full text-green-500">
                            <Gamepad2 size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-700">Games</h2>
                    </div>
                    <div className="p-8 text-center bg-green-50 rounded-2xl border-2 border-dashed border-green-300">
                        <p className="text-green-600 font-medium">Coming Soon!</p>
                        <p className="text-sm text-slate-400 mt-2">Fun games are loading...</p>
                    </div>
                </motion.div>

                {/* English Adventure Section */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl border-4 border-indigo-200 cursor-pointer"
                    onClick={() => navigate('/kindergarten/english')}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-indigo-100 rounded-full text-indigo-500">
                            <span className="text-3xl">🔤</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-700">English</h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-600">Learn letters, words, and stories in a magical kingdom!</p>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li>✨ 3D Adventure</li>
                            <li>🎤 Interactive Speech</li>
                            <li>🏆 Earn XP & Badges</li>
                        </ul>
                        <button className="w-full py-2 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors">
                            Start Adventure 🚀
                        </button>
                    </div>
                </motion.div>

                {/* Hindi Adventure Section */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl border-4 border-orange-200 cursor-pointer"
                    onClick={() => navigate('/kindergarten/hindi')}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-orange-100 rounded-full text-orange-500">
                            <span className="text-3xl">🕉️</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-700">Hindi</h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-600">हिंदी वर्णमाला, शब्द और कहानियाँ सीखें!</p>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li>✨ 3D Adventure</li>
                            <li>🎤 Interactive Speech</li>
                            <li>🏆 Earn XP & Badges</li>
                        </ul>
                        <button className="w-full py-2 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors">
                            Start Adventure 🚀
                        </button>
                    </div>
                </motion.div>

                {/* Math Adventure Section */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl border-4 border-green-200 cursor-pointer"
                    onClick={() => navigate('/kindergarten/math')}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-green-100 rounded-full text-green-500">
                            <span className="text-3xl">🔢</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-700">Math</h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-600">Numbers, Shapes & Patterns Fun!</p>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li>✨ 3D Numbers World</li>
                            <li>🎤 Interactive Learning</li>
                            <li>🏆 Math Genius Badges</li>
                        </ul>
                        <button className="w-full py-2 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors">
                            Start Adventure 🚀
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* Story Reader Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <StoryReader
                        title={selectedStory.title}
                        pages={selectedStory.pages}
                        onClose={() => setSelectedStory(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Kindergarten;
