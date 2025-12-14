import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { semestersData, timelineData, Subject } from '../data/engineeringCsCurriculum';
import { ChevronRight, X, BookOpen, Clock, Award, Code, GraduationCap } from 'lucide-react';

const EngineeringCSRoadmap: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate initial progress loading
        const timer = setTimeout(() => setProgress(35), 1000);
        return () => clearTimeout(timer);
    }, []);

    const stats = [
        { label: 'Total Credits', value: 192, icon: BookOpen },
        { label: 'Core Subjects', value: 48, icon: Code },
        { label: 'Hours', value: '1500+', icon: Clock },
        { label: 'Projects', value: 8, icon: Award },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20">

            {/* HERO HEADER */}
            <header className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 pt-20 pb-32 px-6 rounded-b-[4rem] shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
                    >
                        Engineering CS Roadmap
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-blue-200 max-w-2xl mx-auto"
                    >
                        Master the 4-year journey of Computer Science Engineering. A semester-by-semester guide to becoming a world-class engineer.
                    </motion.p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">

                {/* STATS & PROGRESS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700 shadow-xl mb-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-b border-slate-700 pb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="inline-flex p-3 rounded-full bg-blue-500/20 text-blue-400 mb-3">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold text-blue-300">
                            <span>Your Journey Progress</span>
                            <span>{progress}% Completed</span>
                        </div>
                        <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                            />
                        </div>
                    </div>
                </motion.div>


                {/* SEMESTERS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-20">
                    {semestersData.map((sem, idx) => (
                        <motion.div
                            key={sem.semester}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 border-b border-slate-700 flex justify-between items-center group-hover:bg-slate-800/50 transition-colors">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Semester {sem.semester}</h2>
                                    <span className="text-blue-400 text-sm font-medium">{sem.year} • {sem.credits} Credits</span>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                                    {sem.semester}
                                </div>
                            </div>

                            <div className="p-6 space-y-3">
                                {sem.subjects.slice(0, 4).map((subject, sIdx) => (
                                    <div
                                        key={sIdx}
                                        onClick={() => setSelectedSubject(subject)}
                                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-700 hover:bg-slate-700 hover:border-blue-500/30 cursor-pointer transition-all"
                                    >
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-slate-200">{subject.name}</h3>
                                            <div className="flex gap-2 mt-1 flex-wrap">
                                                {subject.languages.map((lang, lIdx) => (
                                                    <span key={lIdx} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-slate-500" />
                                    </div>
                                ))}
                                {sem.subjects.length > 4 && (
                                    <div className="text-center pt-2">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">+ {sem.subjects.length - 4} More Subjects</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* CAREER TIMELINE */}
                <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                        Career Development Timeline
                    </h2>

                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-indigo-200 md:left-1/2 md:-ml-0.5"></div>

                        <div className="space-y-12">
                            {timelineData.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="hidden md:block w-5/12"></div>

                                    <div className="z-10 flex min-w-[56px] h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/30 text-white font-bold text-xl border-4 border-white">
                                        {idx + 1}
                                    </div>

                                    <div className="ml-6 md:ml-0 md:w-5/12 bg-slate-50 p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold text-blue-900">{item.phase}</h3>
                                        <p className="text-slate-500 font-medium mb-3">{item.year}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* FOOTER */}
            <footer className="text-center mt-20 text-slate-500">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <GraduationCap size={24} className="text-blue-500" />
                    <span className="text-lg font-bold text-slate-300">EduVenture University</span>
                </div>
                <p>Empowering the next generation of engineers.</p>
            </footer>


            {/* MODAL */}
            <AnimatePresence>
                {selectedSubject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white text-slate-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold">{selectedSubject.name}</h3>
                                    <div className="text-blue-100 mt-1 flex gap-3 text-sm font-medium">
                                        <span className="bg-white/20 px-2 py-0.5 rounded">{selectedSubject.credits} Credits</span>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedSubject(null)} className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1 rounded-full transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Description</h4>
                                    <p className="text-slate-700 leading-relaxed text-lg">{selectedSubject.description}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Core Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedSubject.languages.map((lang, i) => (
                                            <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold border border-slate-200">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
                                    <button
                                        onClick={() => setSelectedSubject(null)}
                                        className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                                        Start Learning
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

export default EngineeringCSRoadmap;
