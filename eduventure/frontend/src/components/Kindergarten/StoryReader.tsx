import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Pause, Play } from 'lucide-react';

interface StoryPage {
    image: string;
    text: string;
}

interface StoryReaderProps {
    title: string;
    pages: StoryPage[];
    onClose: () => void;
}

const StoryReader: React.FC<StoryReaderProps> = ({ title, pages, onClose }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Placeholder for AI TTS integration
    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        // TODO: Connect to Gemini TTS
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
            <div className="bg-white rounded-3xl w-full max-w-4xl h-[80vh] overflow-hidden flex flex-col shadow-2xl">
                {/* Header */}
                <div className="p-4 bg-pink-100 flex justify-between items-center border-b border-pink-200">
                    <h2 className="text-2xl font-bold text-pink-600">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white rounded-full hover:bg-pink-200 transition-colors text-pink-500 font-bold"
                    >
                        ❌ Close
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row p-6 gap-6 overflow-y-auto">
                    {/* Illustration Area */}
                    <div className="flex-1 bg-pink-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-pink-300 min-h-[300px]">
                        {/* Placeholder for Dynamic Image / 3D Scene */}
                        <div className="text-center p-8">
                            <span className="text-6xl mb-4 block">🎨</span>
                            <p className="text-pink-400 font-medium">Illustration for Page {currentPage + 1}</p>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="flex-1 flex flex-col justify-center space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200"
                            >
                                <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed font-comic">
                                    {pages[currentPage].text}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex items-center justify-between bg-slate-100 p-4 rounded-xl">
                            <button
                                onClick={toggleAudio}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${isPlaying ? 'bg-pink-500 text-white shadow-lg scale-105' : 'bg-white text-slate-600 hover:bg-pink-100'}`}
                            >
                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                                {isPlaying ? 'Reading...' : 'Read to Me (AI)'}
                            </button>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                                    disabled={currentPage === 0}
                                    className="p-3 bg-white hover:bg-blue-100 rounded-full disabled:opacity-50 text-blue-500 shadow-sm"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <div className="flex items-center text-slate-400 font-bold">
                                    {currentPage + 1} / {pages.length}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(pages.length - 1, p + 1))}
                                    disabled={currentPage === pages.length - 1}
                                    className="p-3 bg-white hover:bg-blue-100 rounded-full disabled:opacity-50 text-blue-500 shadow-sm"
                                >
                                    <ChevronRight size={32} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StoryReader;
