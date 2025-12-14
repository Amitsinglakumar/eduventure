import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mbbsCurriculumData, mbbsTimelineData, Subject } from '../data/medicalMbbsCurriculum';
import { ChevronRight, X, Clock, Award, Activity, HeartPulse, Stethoscope, GraduationCap } from 'lucide-react';

const MedicalMbbsRoadmap: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

    const stats = [
        { label: 'Semesters', value: 9, icon: Clock },
        { label: 'Core Subjects', value: 19, icon: Activity },
        { label: 'Clinical Hours', value: '2000+', icon: Stethoscope },
        { label: 'Internship Year', value: 1, icon: HeartPulse },
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'Theory': return 'bg-blue-100 text-blue-700';
            case 'Practical': return 'bg-amber-100 text-amber-700';
            case 'Clinical': return 'bg-rose-100 text-rose-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">

            {/* HERO HEADER */}
            <header className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 pt-20 pb-32 px-6 rounded-b-[4rem] shadow-2xl text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                    >
                        <Stethoscope size={32} className="text-white mr-3" />
                        <span className="text-lg font-bold tracking-wider">MEDICAL EDUCATION</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        MBBS Roadmap
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-teal-100 max-w-2xl mx-auto"
                    >
                        A complete 5.5-year journey to becoming a doctor. From Anatomy to Internship, master the art of healing.
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
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Your Medical Journey</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                                <div className="inline-flex p-3 rounded-full bg-teal-100 text-teal-600 mb-3">
                                    <stat.icon size={28} />
                                </div>
                                <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>


                {/* CURRICULUM GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {mbbsCurriculumData.map((phase, idx) => (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-2xl hover:border-teal-300 transition-all duration-300"
                        >
                            <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-6 text-white flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-bold">{phase.phase}</h2>
                                    <span className="text-teal-100 text-sm font-medium block mt-1">{phase.year} • {phase.duration}</span>
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-sm font-bold border border-white/30">
                                    {phase.semesters === "Rotatory" ? "Rotatory" : `Sem ${phase.semesters}`}
                                </div>
                            </div>

                            <div className="p-6 space-y-3">
                                {phase.subjects.slice(0, 3).map((subject, sIdx) => (
                                    <div
                                        key={sIdx}
                                        onClick={() => setSelectedSubject(subject)}
                                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-teal-50 hover:border-teal-200 cursor-pointer transition-all group"
                                    >
                                        <div>
                                            <h3 className="font-bold text-slate-700 group-hover:text-teal-700">{subject.name}</h3>
                                            <div className="flex gap-2 mt-2 items-center">
                                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${getTypeColor(subject.type)}`}>
                                                    {subject.type}
                                                </span>
                                                <span className="text-xs text-slate-400 font-medium pl-1 border-l border-slate-300">
                                                    {subject.credits}
                                                </span>
                                            </div>
                                        </div>
                                        <ChevronRight size={18} className="text-slate-400 group-hover:text-teal-500 transition-colors" />
                                    </div>
                                ))}
                                {phase.subjects.length > 3 && (
                                    <div className="text-center pt-3">
                                        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest cursor-pointer hover:underline">+ {phase.subjects.length - 3} More Subjects</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* CAREER TIMELINE */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-12">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
                        Medical Career Development
                    </h2>

                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-[1px]"></div>

                        <div className="space-y-12">
                            {mbbsTimelineData.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="hidden md:block w-5/12"></div>

                                    <div className="z-10 flex min-w-[56px] h-14 w-14 items-center justify-center rounded-full bg-white border-4 border-teal-500 shadow-lg text-teal-600 font-bold text-xl">
                                        {idx + 1}
                                    </div>

                                    <div className="ml-8 md:ml-0 md:w-5/12 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
                                        <h3 className="text-lg font-bold text-slate-800">{item.phase}</h3>
                                        <p className="text-slate-500 font-medium mb-3 text-sm">{item.year}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold">
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
            <footer className="text-center mt-20 text-slate-500 pb-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <GraduationCap size={24} className="text-teal-600" />
                    <span className="text-lg font-bold text-slate-700">EduVenture Medical School</span>
                </div>
                <p>Preparing the next generation of healthcare leaders.</p>
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
                            <div className="bg-teal-600 p-6 text-white flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold">{selectedSubject.name}</h3>
                                    <div className="mt-2 flex gap-2">
                                        <span className={`text-xs px-2 py-1 rounded font-bold uppercase tracking-wide bg-white/20 border border-white/30`}>
                                            {selectedSubject.type}
                                        </span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/10">{selectedSubject.credits}</span>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedSubject(null)} className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Activity size={14} /> Description
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">{selectedSubject.description}</p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Award size={14} /> Learning Outcomes
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex gap-3 text-sm text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span>
                                            Master {selectedSubject.name} fundamentals and clinical applications.
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span>
                                            Develop professional competence in patient care.
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span>
                                            Apply ethical principles in medical practice.
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <button
                                        onClick={() => setSelectedSubject(null)}
                                        className="w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 shadow-lg shadow-teal-500/20 transition-all"
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

export default MedicalMbbsRoadmap;
