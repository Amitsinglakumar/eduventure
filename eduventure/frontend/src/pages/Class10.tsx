import React, { useState, useEffect } from 'react';
import { class10Curriculum } from '../data/class10Curriculum';

const Class10: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('math');
    const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
    const [totalXP, setTotalXP] = useState<number>(0);
    const [notification, setNotification] = useState<string | null>(null);

    // Load XP from local storage
    useEffect(() => {
        const savedXP = localStorage.getItem('class10_xp');
        if (savedXP) {
            setTotalXP(parseInt(savedXP));
        }
    }, []);

    const currentSubject = class10Curriculum[activeTab];
    const level = Math.floor(totalXP / 150) + 1; // Class 10 uses 150 XP per level
    const progress = totalXP % 150;

    const addXP = (points: number) => {
        const newXP = totalXP + points;
        setTotalXP(newXP);
        localStorage.setItem('class10_xp', newXP.toString());
        showNotification(`+${points} XP! Great work! 🎉`);
    };

    const showNotification = (msg: string) => {
        setNotification(msg);
        setTimeout(() => setNotification(null), 3000);
    };

    const resetProgress = () => {
        if (window.confirm('Are you sure you want to reset progress?')) {
            setTotalXP(0);
            localStorage.setItem('class10_xp', '0');
            showNotification('Progress reset! ↺');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 to-red-700 font-sans text-gray-800 pb-20">

            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-5 right-5 bg-white text-blue-900 px-6 py-3 rounded-xl shadow-2xl z-50 animate-bounce font-bold border-l-4 border-green-500">
                    {notification}
                </div>
            )}

            <div className="max-w-7xl mx-auto p-4 md:p-8">

                {/* HEADER */}
                <header className="bg-white rounded-xl p-8 mb-8 shadow-2xl text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600">
                        📚 Class 10 - Complete Curriculum
                    </h1>
                    <p className="text-gray-500 text-lg mb-8">Comprehensive Learning for Board Examinations • Ages 15-16</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {[
                            { val: 104, label: 'Total Chapters' },
                            { val: '1200+', label: 'Topics Covered' },
                            { val: '600+', label: 'Practice Questions' },
                            { val: '1500+', label: 'Learning Hours' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-700 to-red-600 text-white p-6 rounded-lg shadow-lg">
                                <div className="text-3xl font-bold">{stat.val}</div>
                                <div className="text-sm opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </header>

                {/* GAMIFICATION BAR */}
                <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <div className="flex gap-4">
                            <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                                XP: {totalXP}
                            </span>
                            <span className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                                Level: {level}
                            </span>
                        </div>
                        <button onClick={resetProgress} className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm transition-colors">
                            Reset Progress
                        </button>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-blue-600 to-red-600 h-full transition-all duration-700 ease-out"
                            style={{ width: `${(progress / 150) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* TABS */}
                <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden sticky top-2 z-20">
                    <div className="flex overflow-x-auto border-b border-gray-200">
                        {Object.values(class10Curriculum).map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => { setActiveTab(sub.id); setActiveChapterId(null); }}
                                className={`flex-1 py-4 px-6 font-medium text-lg whitespace-nowrap transition-colors min-w-[140px]
                    ${activeTab === sub.id
                                        ? 'border-b-4 border-blue-800 text-blue-800 bg-blue-50'
                                        : 'text-gray-500 hover:text-blue-800 hover:bg-gray-50'}`}
                            >
                                <span className="mr-2">{sub.icon}</span> {sub.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENT AREA */}
                <div className="bg-white rounded-xl p-6 md:p-10 shadow-2xl min-h-[600px]">

                    <h2 className="text-3xl font-bold text-blue-800 mb-8 pb-4 border-b border-gray-200">
                        {currentSubject.icon} {currentSubject.name} <span className="text-gray-400 text-sm font-normal mt-2">({currentSubject.chapters.length} Chapters)</span>
                    </h2>

                    {currentSubject.chapters.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-6xl mb-4">📚</p>
                            <h3 className="text-2xl font-bold mb-2">Content Loading...</h3>
                            <p>{currentSubject.name} curriculum data is being prepared.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentSubject.chapters.map((chapter) => (
                                <div key={chapter.id} className="col-span-1">
                                    {/* Chapter Card */}
                                    <div
                                        onClick={() => setActiveChapterId(activeChapterId === chapter.id ? null : chapter.id)}
                                        className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 bg-slate-50
                                ${activeChapterId === chapter.id
                                                ? 'border-blue-800 shadow-lg -translate-y-1'
                                                : 'border-gray-200 hover:border-blue-800 hover:shadow-lg hover:-translate-y-1'}`}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-red-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                                            {chapter.id}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            {chapter.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {chapter.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* DETAILED VIEW */}
                    {activeChapterId && (
                        <div className="mt-12 animate-fade-in">
                            {currentSubject.chapters.filter(c => c.id === activeChapterId).map(chapter => (
                                <div key={chapter.id} className="bg-slate-50 rounded-lg border-l-4 border-blue-800 p-8 shadow-sm">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-bold text-blue-800">
                                            Chapter {chapter.id}: {chapter.title}
                                        </h3>
                                        <button
                                            onClick={() => setActiveChapterId(null)}
                                            className="text-gray-400 hover:text-red-500 text-2xl font-bold px-2"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Key Concepts */}
                                        {chapter.keyConcepts.length > 0 && (
                                            <div>
                                                {chapter.keyConcepts.map((concept, idx) => (
                                                    <div key={idx} className="mb-4">
                                                        <strong className="text-blue-900 block mb-1 text-lg">{concept.title}</strong>
                                                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                            {concept.points.map((p, i) => <li key={i}>{p}</li>)}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Formulas */}
                                        {chapter.formulas && chapter.formulas.length > 0 && (
                                            <div className="bg-white border-2 border-blue-800 rounded-lg p-6 my-6 text-center font-mono text-blue-800 font-bold text-lg">
                                                {chapter.formulas.map((f, i) => (
                                                    <div key={i}>{f}</div>
                                                ))}
                                            </div>
                                        )}

                                        <button
                                            onClick={(e) => {
                                                const btn = e.currentTarget;
                                                addXP(chapter.xp);
                                                btn.textContent = '✓ Completed!';
                                                btn.disabled = true;
                                                btn.classList.add('opacity-50', 'cursor-not-allowed');
                                            }}
                                            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-700 to-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                                        >
                                            Mark Complete (+{chapter.xp} XP)
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                {/* FOOTER */}
                <div className="text-center text-white mt-12 opacity-80">
                    <p className="font-bold text-lg">🌟 EduVenture - Board Exam Ready</p>
                    <p className="text-sm">Complete Class 10 Curriculum</p>
                </div>

            </div>
        </div>
    );
};

export default Class10;
