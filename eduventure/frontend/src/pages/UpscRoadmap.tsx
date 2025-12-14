import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { upscPhasesData, upscTimelineData, upscStrategyData, upscResourcesData, Subject } from '../data/upscCurriculum';
import { ChevronRight, X, BookOpen, User, FileText, CheckCircle, Flag, Award, Clock } from 'lucide-react';

const UpscRoadmap: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

    const stats = [
        { label: 'Years Prep', value: 2 },
        { label: 'Exam Stages', value: 3 },
        { label: 'Core Subjects', value: 15 },
        { label: 'Total Marks', value: 2025 },
        { label: 'Study Hours', value: '10k+' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">

            {/* HERO HEADER */}
            <header className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-800 pt-20 pb-32 px-6 rounded-b-[4rem] shadow-2xl text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/india.png')]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
                    >
                        <Flag size={32} className="text-orange-400 mr-3" />
                        <span className="text-lg font-bold tracking-wider text-orange-100">CIVIL SERVICES EXAM</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        UPSC IAS Roadmap
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-indigo-100 max-w-2xl mx-auto"
                    >
                        The ultimate 2-year strategy to crack India's most prestigious examination.
                    </motion.p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">

                {/* STATS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl mb-12"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Your Journey to LBSNAA</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-4 rounded-2xl bg-indigo-50 border border-indigo-100 hover:border-orange-200 transition-colors">
                                <div className="text-3xl font-bold text-indigo-700">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>


                {/* EXAM PHASES GRID */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8 pl-4 border-l-8 border-orange-500">Exam Architecture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upscPhasesData.map((phase, idx) => (
                            <motion.div
                                key={phase.phase}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-2xl hover:border-orange-300 transition-all duration-300"
                            >
                                <div className="bg-gradient-to-r from-indigo-800 to-indigo-700 p-6 text-white text-center">
                                    <h2 className="text-2xl font-bold">{phase.phase}</h2>
                                    <span className="text-indigo-100 text-sm font-medium block mt-1">{phase.duration} • {phase.marks}</span>
                                </div>

                                <div className="p-6">
                                    <p className="text-center text-slate-500 italic mb-6 text-sm">{phase.description}</p>
                                    <div className="space-y-3">
                                        {phase.subjects.map((subject, sIdx) => (
                                            <div
                                                key={sIdx}
                                                onClick={() => setSelectedSubject(subject)}
                                                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50 hover:border-orange-200 cursor-pointer transition-all group"
                                            >
                                                <div>
                                                    <h3 className="font-bold text-slate-700 group-hover:text-orange-700">{subject.name}</h3>
                                                    <div className="text-xs text-orange-600 font-medium mt-1">
                                                        {subject.details.split(',')[0]}...
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xs font-bold bg-white border border-slate-200 px-2 py-1 rounded text-slate-500 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
                                                        {subject.marks}
                                                    </span>
                                                    <ChevronRight size={18} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* STRATEGY & TIMELINE SPLIT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

                    {/* TIMELINE (Left 2/3) */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full">
                            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                                <Clock className="text-indigo-600" /> 2-Year Strategic Timeline
                            </h2>
                            <div className="space-y-8 relative pl-4">
                                {/* Vertical Line */}
                                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-indigo-100"></div>

                                {upscTimelineData.map((item, idx) => (
                                    <div key={idx} className="relative flex gap-6">
                                        <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-indigo-600 text-indigo-700 font-bold flex items-center justify-center shadow-sm">
                                            {idx + 1}
                                        </div>
                                        <div className="pb-4">
                                            <h3 className="text-lg font-bold text-indigo-900">{item.phase}</h3>
                                            <div className="mt-3 space-y-2">
                                                {item.tasks.map((task, tIdx) => (
                                                    <div key={tIdx} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{task}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* STRATEGY (Right 1/3) */}
                    <div className="space-y-8">
                        {upscStrategyData.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-l-orange-500 border-y border-r border-slate-100">
                                <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.items.map((item, iIdx) => (
                                        <li key={iIdx} className="text-sm text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-200">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* RESOURCES SECTION */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white mb-12">
                    <h2 className="text-3xl font-bold mb-10 text-center text-orange-400">Essential Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {upscResourcesData.map((res, idx) => (
                            <div key={idx} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-lg mb-4 text-indigo-200 h-14 flex items-center">
                                    {res.title.replace('📖 ', '').replace('🖥️ ', '').replace('🎯 ', '').replace('🏆 ', '')}
                                </h3>
                                <ul className="space-y-4">
                                    {res.items.slice(0, 4).map((item, rIdx) => (
                                        <li key={rIdx} className="text-xs text-slate-300 leading-relaxed">
                                            <span className="block font-bold text-orange-400 mb-1">{item.split(':')[0]}</span>
                                            {item.split(':')[1] || item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* FOOTER */}
            <footer className="text-center mt-20 text-slate-500 pb-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Award size={24} className="text-orange-500" />
                    <span className="text-lg font-bold text-slate-700">EduVenture Civil Services Academy</span>
                </div>
                <p>Serving the Nation through Excellence.</p>
            </footer>


            {/* MODAL */}
            <AnimatePresence>
                {selectedSubject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold">{selectedSubject.name}</h3>
                                    <div className="mt-2 flex gap-2">
                                        <span className="text-xs px-2 py-1 rounded font-bold uppercase tracking-wide bg-orange-500 text-white">
                                            {selectedSubject.marks} Marks
                                        </span>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedSubject(null)} className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <BookOpen size={14} /> Subject Details
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-lg">{selectedSubject.details}</p>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                    <h4 className="text-xs font-bold text-orange-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <CheckCircle size={14} /> Preparation Tips
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex gap-3 text-sm text-slate-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                                            Thoroughly read standard reference books.
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                                            Link static concepts with current affairs.
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                                            Practice answer writing for this subject regularly.
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <button
                                        onClick={() => setSelectedSubject(null)}
                                        className="w-full py-3 bg-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-800 shadow-lg shadow-indigo-500/20 transition-all"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default UpscRoadmap;
