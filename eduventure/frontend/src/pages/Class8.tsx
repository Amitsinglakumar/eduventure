import React, { useState, useEffect } from 'react';
import { class8Curriculum } from '../data/class8Curriculum';

const Class8: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('mathematics');
    const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
    const [totalXP, setTotalXP] = useState<number>(0);
    const [notification, setNotification] = useState<string | null>(null);
    const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});

    // Load XP from local storage on mount
    useEffect(() => {
        const savedXP = localStorage.getItem('class8_xp');
        if (savedXP) {
            setTotalXP(parseInt(savedXP));
        }
    }, []);

    const currentSubject = class8Curriculum[activeTab];
    const level = Math.floor(totalXP / 100) + 1;
    const progress = totalXP % 100;

    const addXP = (points: number) => {
        const newXP = totalXP + points;
        setTotalXP(newXP);
        localStorage.setItem('class8_xp', newXP.toString());
        showNotification(`+${points} XP! Great work! 🎉`);
    };

    const showNotification = (msg: string) => {
        setNotification(msg);
        setTimeout(() => setNotification(null), 3000);
    };

    const resetProgress = () => {
        if (window.confirm('Are you sure you want to reset progress?')) {
            setTotalXP(0);
            localStorage.setItem('class8_xp', '0');
            showNotification('Progress reset! ↺');
        }
    };

    const toggleAnswer = (questionId: number) => {
        setExpandedAnswers(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 font-sans text-gray-800 pb-20">

            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-5 right-5 bg-white text-indigo-700 px-6 py-3 rounded-xl shadow-2xl z-50 animate-bounce font-bold border-l-4 border-green-500">
                    {notification}
                </div>
            )}

            <div className="max-w-7xl mx-auto p-4 md:p-8">

                {/* HEADER */}
                <header className="bg-white rounded-3xl p-8 mb-8 shadow-2xl text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        📚 Class 8 - Complete Curriculum
                    </h1>
                    <p className="text-gray-500 text-lg mb-8">Interactive Learning Platform • Ages 13-14</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {[
                            { val: 16, label: 'Math Chapters' },
                            { val: 18, label: 'Science Chapters' },
                            { val: 22, label: 'Social Chapters' },
                            { val: '300+', label: 'Practice Questions' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
                                <div className="text-3xl font-bold">{stat.val}</div>
                                <div className="text-sm opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </header>

                {/* GAMIFICATION BAR */}
                <div className="bg-white p-6 rounded-2xl shadow-xl mb-8 border border-gray-100">
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <div className="flex gap-4">
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold border border-green-200">
                                XP: {totalXP}
                            </span>
                            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold border border-yellow-200">
                                Level: {level}
                            </span>
                        </div>
                        <button onClick={resetProgress} className="text-sm text-red-500 hover:text-red-700 font-medium underline">
                            Reset Progress
                        </button>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
                        <span>Progress to Level {level + 1}</span>
                        <span>{progress}/100 XP</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden border border-gray-200">
                        <div
                            className="bg-gradient-to-r from-green-400 to-teal-500 h-full transition-all duration-700 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* TABS */}
                <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden sticky top-2 z-20">
                    <div className="flex overflow-x-auto">
                        {Object.values(class8Curriculum).map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => { setActiveTab(sub.id); setActiveChapterId(null); }}
                                className={`flex-1 py-4 px-6 font-bold text-lg whitespace-nowrap transition-colors border-b-4 
                    ${activeTab === sub.id
                                        ? 'border-indigo-600 text-indigo-700 bg-indigo-50'
                                        : 'border-transparent text-gray-500 hover:text-indigo-500 hover:bg-gray-50'}`}
                            >
                                <span className="mr-2">{sub.icon}</span> {sub.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENT AREA */}
                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl min-h-[600px]">

                    <h2 className="text-3xl font-bold text-indigo-900 mb-8 flex items-center gap-3 border-b pb-4">
                        {currentSubject.icon} {currentSubject.name} <span className="text-gray-400 text-sm font-normal mt-2">({currentSubject.chapters.length} Chapters)</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentSubject.chapters.map((chapter) => (
                            <div key={chapter.id} className="col-span-1">
                                {/* Chapter Card */}
                                <div
                                    onClick={() => setActiveChapterId(activeChapterId === chapter.id ? null : chapter.id)}
                                    className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group
                        ${activeChapterId === chapter.id
                                            ? 'border-indigo-500 bg-indigo-50 shadow-md scale-[1.02]'
                                            : 'border-gray-100 bg-gray-50 hover:border-indigo-300 hover:bg-white hover:shadow-xl hover:-translate-y-2'}`}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                            {chapter.id}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-indigo-700 transition-colors">
                                            {chapter.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-2">
                                        {chapter.topics.slice(0, 3).map((topic, idx) => (
                                            <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> {topic}
                                            </div>
                                        ))}
                                    </div>

                                    {activeChapterId !== chapter.id && (
                                        <div className="mt-4 text-indigo-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1">
                                            Click to Expand ⬇
                                        </div>
                                    )}
                                </div>

                                {/* EXPANDED CONTENT - Rendered right below the card in grid flow for mobile, or handled differently */}
                            </div>
                        ))}
                    </div>

                    {/* DETAILED VIEW - Only shown when a chapter is active */}
                    {activeChapterId && (
                        <div className="mt-12 animate-fade-in">
                            {currentSubject.chapters.filter(c => c.id === activeChapterId).map(chapter => (
                                <div key={chapter.id} className="bg-gray-50 rounded-2xl border-l-8 border-indigo-600 p-8 shadow-inner">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-bold text-indigo-900">
                                            Chapter {chapter.id}: {chapter.title}
                                        </h3>
                                        <button
                                            onClick={() => setActiveChapterId(null)}
                                            className="text-gray-400 hover:text-red-500 text-2xl font-bold px-2"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    <div className="space-y-8">
                                        {/* Key Concepts */}
                                        <div>
                                            <h4 className="text-lg font-bold text-indigo-700 mb-4 uppercase tracking-wider">Key Concepts</h4>
                                            <div className="grid gap-4">
                                                {chapter.keyConcepts.map((concept, idx) => (
                                                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100">
                                                        <strong className="text-indigo-900 block mb-2">{concept.title}</strong>
                                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                                            {concept.points.map((p, i) => <li key={i}>{p}</li>)}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Formulas */}
                                        {chapter.formulas && chapter.formulas.length > 0 && (
                                            <div>
                                                <h4 className="text-lg font-bold text-indigo-700 mb-4 uppercase tracking-wider">Important Formulas</h4>
                                                <div className="flex flex-wrap gap-4">
                                                    {chapter.formulas.map((f, i) => (
                                                        <div key={i} className="bg-indigo-900 text-white font-mono px-6 py-3 rounded-lg shadow-lg text-lg">
                                                            {f}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Practice Questions */}
                                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
                                            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                                📝 Practice Questions
                                                <span className="text-sm font-normal bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Earn XP per question!</span>
                                            </h4>

                                            <div className="space-y-4">
                                                {chapter.questions.map((q) => (
                                                    <div key={q.id} className="border-l-4 border-yellow-400 bg-yellow-50/50 p-4 rounded-r-lg hover:shadow-md transition-shadow">
                                                        <div
                                                            onClick={() => toggleAnswer(q.id)}
                                                            className="flex items-start gap-4 cursor-pointer"
                                                        >
                                                            <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                                {q.id}
                                                            </span>
                                                            <div className="flex-1">
                                                                <p className="font-medium text-gray-800 text-lg">{q.question}</p>
                                                                {expandedAnswers[q.id] && (
                                                                    <div className="mt-3 bg-white p-4 rounded-lg border border-green-200 text-green-700 animate-slide-down">
                                                                        <strong>Answer:</strong> {q.answer}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <span className="text-gray-400 text-sm">{expandedAnswers[q.id] ? 'Hide Answer' : 'Show Answer'}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => addXP(chapter.xp)}
                                                className="mt-6 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                            >
                                                ✓ Mark Chapter Complete (+{chapter.xp} XP)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                {/* FOOTER */}
                <div className="text-center text-white mt-12 opacity-80">
                    <p className="font-bold text-lg">🌟 EduVenture - Making Education Interactive & Fun</p>
                    <p className="text-sm">Complete Curriculum for Class 8</p>
                </div>

            </div>
        </div>
    );
};

export default Class8;
