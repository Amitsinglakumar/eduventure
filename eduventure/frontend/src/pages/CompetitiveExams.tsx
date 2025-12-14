import React from 'react';
import { motion } from 'framer-motion';
import { Target, Clock, FileText, Video, PlayCircle } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const CompetitiveExams = () => {
    const navigate = useNavigate();
    const exams = [
        {
            title: "JEE Mains & Advanced",
            color: "red",
            desc: "For Engineering Aspirants",
            stats: { tests: 25, videos: 150 }
        },
        {
            title: "NEET",
            color: "green",
            desc: "For Medical Aspirants",
            stats: { tests: 30, videos: 200 }
        },
        {
            title: "UPSC Civil Services",
            color: "orange",
            desc: "For Civil Servants",
            stats: { tests: 15, videos: 500 }
        },
        {
            title: "GATE",
            color: "blue",
            desc: "Graduate Aptitude Test",
            stats: { tests: 10, videos: 80 }
        }
    ];

    return (
        <div className="p-8 min-h-screen bg-slate-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold text-slate-800">Competitive Exams</h1>
                <p className="text-slate-500 mt-2">Ace your entrance exams with our structured prep material.</p>
            </motion.div>

            {/* Featured Exams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {exams.map((exam, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        onClick={() => {
                            if (exam.title === "UPSC Civil Services") {
                                navigate('/competitive-exams/upsc');
                            } else if (exam.title === "GATE") {
                                navigate('/competitive-exams/gate');
                            }
                        }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group"
                    >
                        <div className={`w-12 h-12 rounded-full bg-${exam.color}-100 flex items-center justify-center mb-4 text-${exam.color}-600`}>
                            <Target size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800">{exam.title}</h3>
                        <p className="text-sm text-slate-400 mb-4">{exam.desc}</p>

                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                            <span className="flex items-center gap-1"><FileText size={14} /> {exam.stats.tests} Tests</span>
                            <span className="flex items-center gap-1"><Video size={14} /> {exam.stats.videos} Lecs</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Practice Section */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Daily Practice</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-between cursor-pointer hover:bg-purple-100 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-full text-purple-600 shadow-sm"><Clock size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-700">Mock Test</h4>
                                <p className="text-xs text-purple-600 font-semibold">15 Minutes</p>
                            </div>
                        </div>
                        <button className="px-3 py-1 bg-purple-600 text-white text-xs rounded-lg font-bold">Start</button>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-between cursor-pointer hover:bg-indigo-100 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-full text-indigo-600 shadow-sm"><PlayCircle size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-700">Video Solution</h4>
                                <p className="text-xs text-indigo-600 font-semibold">Today's Topic</p>
                            </div>
                        </div>
                        <button className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-lg font-bold">Watch</button>
                    </div>

                    <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-between cursor-pointer hover:bg-orange-100 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-full text-orange-600 shadow-sm"><FileText size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-700">PYQ Papers</h4>
                                <p className="text-xs text-orange-600 font-semibold">2005 - 2024</p>
                            </div>
                        </div>
                        <button className="px-3 py-1 bg-orange-600 text-white text-xs rounded-lg font-bold">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitiveExams;
