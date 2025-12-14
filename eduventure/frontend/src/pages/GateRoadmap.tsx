import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gateBranches, gateSyllabus, gateQuestions } from '../data/gateCurriculum';
import { ChevronDown, ChevronUp, CheckCircle, BookOpen, PenTool, BarChart2, Layers } from 'lucide-react';

const GateRoadmap: React.FC = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [visibleSolutions, setVisibleSolutions] = useState<number[]>([]);
    const [selectedBranchFilter, setSelectedBranchFilter] = useState('');

    const toggleSolution = (idx: number) => {
        if (visibleSolutions.includes(idx)) {
            setVisibleSolutions(visibleSolutions.filter(i => i !== idx));
        } else {
            setVisibleSolutions([...visibleSolutions, idx]);
        }
    };

    const stats = [
        { label: 'Papers', value: 30 },
        { label: 'Marks', value: 100 },
        { label: 'Duration', value: '3 Hrs' },
        { label: 'Aspirants', value: '8L+' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
            {/* HERO HEADER */}
            <header className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 pt-20 pb-32 px-6 rounded-b-[3rem] shadow-xl text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
                    >
                        <PenTool size={24} className="text-orange-400 mr-2" />
                        <span className="text-sm font-bold tracking-wider text-orange-100 uppercase">Engineering & Science</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                    >
                        GATE Exam Platform
                    </motion.h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Graduate Aptitude Test in Engineering. Your gateway to IITs, PSUs, and R&D.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-blue-200 uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* TAB CONTROLS */}
            <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20 mb-12">
                <div className="bg-white rounded-2xl p-2 shadow-lg flex flex-wrap justify-center gap-2 border border-slate-100">
                    {[
                        { id: 'overview', label: 'Overview', icon: BarChart2 },
                        { id: 'branches', label: 'All Branches', icon: Layers },
                        { id: 'pattern', label: 'Exam Pattern', icon: CheckCircle },
                        { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
                        { id: 'questions', label: 'Practice Qs', icon: PenTool },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <tab.icon size={18} /> {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    {/* OVERVIEW TAB */}
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                <h2 className="text-2xl font-bold text-blue-900 mb-6">Why GATE?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                        <h3 className="font-bold text-lg text-blue-800 mb-2">🎓 Higher Education (M.Tech/PhD)</h3>
                                        <p className="text-sm text-slate-600">
                                            Admission to IISc, IITs, NITs with scholarship (₹12,400/month).
                                            Gateway to foreign universities in Singapore & Germany.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                                        <h3 className="font-bold text-lg text-orange-800 mb-2">💼 PSU Recruitment</h3>
                                        <p className="text-sm text-slate-600">
                                            Direct Class-1 Officer jobs in ONGC, NTPC, IOCL, BHEL, GAIL, etc., with high starting packages.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* BRANCHES TAB */}
                    {activeTab === 'branches' && (
                        <motion.div
                            key="branches"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {gateBranches.map((branch, idx) => (
                                <motion.div
                                    key={branch.code}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            {branch.code}
                                        </div>
                                        <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">
                                            Cutoff: {branch.cutoff}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                                        {branch.name}
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        👥 {branch.candidates.toLocaleString()} candidates
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* QUESTIONS TAB */}
                    {activeTab === 'questions' && (
                        <motion.div
                            key="questions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="flex justify-end mb-6">
                                <select
                                    className="p-2 border border-slate-200 rounded-lg text-sm"
                                    onChange={(e) => setSelectedBranchFilter(e.target.value)}
                                >
                                    <option value="">All Branches</option>
                                    <option value="cs">Computer Science (CS)</option>
                                    <option value="me">Mechanical (ME)</option>
                                </select>
                            </div>

                            <div className="space-y-6">
                                {gateQuestions
                                    .filter(q => selectedBranchFilter ? q.branch === selectedBranchFilter : true)
                                    .map((q, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold uppercase">{q.branch.toUpperCase()}</span>
                                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                                            q.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                                                        }`}>{q.difficulty}</span>
                                                </div>
                                                <span className="text-sm font-bold text-slate-400">{q.marks} Marks</span>
                                            </div>

                                            <p className="font-medium text-lg text-slate-800 mb-6">{q.text}</p>

                                            {q.type === 'MCQ' && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                                    {q.options?.map((opt, i) => (
                                                        <div key={i} className="p-3 border border-slate-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors text-sm">
                                                            <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + i)}</span> {opt}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <button
                                                onClick={() => toggleSolution(idx)}
                                                className="text-sm text-blue-600 font-bold hover:underline flex items-center gap-1"
                                            >
                                                {visibleSolutions.includes(idx) ? 'Hide Solution' : 'Show Solution'}
                                                {visibleSolutions.includes(idx) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </button>

                                            {visibleSolutions.includes(idx) && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100 text-green-800 text-sm"
                                                >
                                                    <strong className="block mb-1">Answer & Explanation:</strong>
                                                    {q.solution}
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </motion.div>
                    )}

                    {/* SYLLABUS TAB */}
                    {activeTab === 'syllabus' && (
                        <motion.div
                            key="syllabus"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-8"
                        >
                            {Object.values(gateSyllabus).map((branchData, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="bg-slate-50 p-4 border-b border-slate-100">
                                        <h3 className="font-bold text-lg text-slate-800">{branchData.name} Syllabus</h3>
                                    </div>
                                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {branchData.topics.map((t, tIdx) => (
                                            <div key={tIdx}>
                                                <h4 className="font-bold text-blue-700 mb-2 text-sm uppercase tracking-wide">{t.subject}</h4>
                                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                                    {t.topics.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="text-center p-8 bg-slate-100 rounded-2xl border border-slate-200 border-dashed text-slate-500">
                                Detailed syllabus for other branches coming soon!
                            </div>
                        </motion.div>
                    )}

                    {/* EXAM PATTERN TAB */}
                    {activeTab === 'pattern' && (
                        <motion.div
                            key="pattern"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-6">Exam Structure</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-700">
                                        <tr>
                                            <th className="p-4 rounded-tl-xl">Section</th>
                                            <th className="p-4">Type</th>
                                            <th className="p-4">No. of Qs</th>
                                            <th className="p-4 rounded-tr-xl">Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-bold">General Aptitude</td>
                                            <td className="p-4 text-slate-500">MCQ</td>
                                            <td className="p-4 text-slate-500">10</td>
                                            <td className="p-4 font-bold text-blue-600">15%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Engineering Maths</td>
                                            <td className="p-4 text-slate-500">MCQ / NAT</td>
                                            <td className="p-4 text-slate-500">~10</td>
                                            <td className="p-4 font-bold text-blue-600">13%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Core Subject</td>
                                            <td className="p-4 text-slate-500">MCQ / MSQ / NAT</td>
                                            <td className="p-4 text-slate-500">~45</td>
                                            <td className="p-4 font-bold text-blue-600">72%</td>
                                        </tr>
                                        <tr className="bg-slate-50/50">
                                            <td className="p-4 font-extrabold text-slate-900">Total</td>
                                            <td className="p-4"></td>
                                            <td className="p-4 font-bold">65 Questions</td>
                                            <td className="p-4 font-bold text-green-600">100 Marks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
};

export default GateRoadmap;
