import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, BookOpen } from 'lucide-react';
import axios from 'axios';

const AiTutor = () => {
    const [topic, setTopic] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!topic) return;
        setLoading(true);
        try {
            // Assuming backend is proxying or handling this
            const res = await axios.post('http://localhost:5000/api/ai/generate', {
                topic,
                ageGroup: 'primary'
            });
            setResponse(res.data.content);
        } catch (error) {
            console.error(error);
            setResponse("Oops! My brain circuits got tangled. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center space-y-4"
            >
                <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                    <Sparkles size={40} />
                </div>
                <h1 className="text-4xl font-bold text-slate-900">What do you want to learn today?</h1>
                <p className="text-xl text-slate-500">I can explain anything from Black Holes to Photosynthesis!</p>
            </motion.div>

            <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-2 max-w-2xl mx-auto">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., How do airplanes fly?"
                    className="flex-1 px-6 py-4 text-lg outline-none rounded-xl"
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition flex items-center gap-2 disabled:opacity-50"
                >
                    {loading ? <span className="animate-spin">🌀</span> : <Send size={20} />}
                    Ask
                </button>
            </div>

            {response && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                >
                    <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center gap-3">
                        <BookOpen className="text-indigo-600" />
                        <h3 className="font-bold text-indigo-900">Lesson: {topic}</h3>
                    </div>
                    <div className="p-8 prose prose-indigo max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }} />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default AiTutor;
