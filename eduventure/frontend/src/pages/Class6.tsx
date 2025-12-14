import React, { useState } from 'react';
import { class6Curriculum, Subject, Chapter } from '../data/class6Curriculum';

// Simple Framer Motion replacement with CSS transitions if package not available, 
// using inline styles for dynamic animations.
// But we assume basic CSS animations are sufficient or we can use standard classes.

const Class6: React.FC = () => {
    const [activeSubject, setActiveSubject] = useState<Subject>(class6Curriculum['math']);
    const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

    const subjects = Object.values(class6Curriculum);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className={`bg-gradient-to-r ${activeSubject.color} text-white p-6 shadow-lg transition-all duration-500`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3">
                            <span className="text-5xl animate-bounce">{activeSubject.icon}</span>
                            Class 6: {activeSubject.name}
                        </h1>
                        <p className="mt-2 text-white/90 text-lg font-medium">
                            Explore your complete curriculum with interactive lessons!
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                            {activeSubject.chapters.length} Chapters
                        </span>
                    </div>
                </div>
            </header>

            <div className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Sidebar: Subject Selection */}
                <div className="lg:col-span-3 space-y-4">
                    <h2 className="text-xl font-bold text-gray-700 mb-4 px-2 border-l-4 border-indigo-500">Subjects</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                        {subjects.map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => { setActiveSubject(sub); setActiveChapter(null); }}
                                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm
                  ${activeSubject.id === sub.id
                                        ? `bg-gradient-to-r ${sub.color} text-white shadow-md ring-2 ring-offset-2 ring-blue-300`
                                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md border border-gray-100'
                                    }`}
                            >
                                <span className="text-2xl">{sub.icon}</span>
                                <span className="font-bold text-lg">{sub.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-9">

                    {/* Chapter List (Grid View) */}
                    {!activeChapter ? (
                        <div className="animate-fade-in-up">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span className="text-indigo-500">📚</span> Select a Chapter to Start
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {activeSubject.chapters.map((chapter) => (
                                    <div
                                        key={chapter.id}
                                        onClick={() => setActiveChapter(chapter)}
                                        className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                                    >
                                        <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${activeSubject.color}`}></div>
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                Chapter {chapter.id}
                                            </span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500 font-bold">
                                                Start ➔
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
                                            {chapter.title}
                                        </h3>
                                        <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                                            {chapter.sections.slice(0, 3).map((s, i) => (
                                                <span key={i} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs border border-blue-100">
                                                    {s.title}
                                                </span>
                                            ))}
                                            {chapter.sections.length > 3 && <span className="text-xs text-gray-400">+{chapter.sections.length - 3} more</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Detailed Chapter View
                        <div className="animate-slide-in-right bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            {/* Chapter Header */}
                            <div className="bg-gray-50 border-b border-gray-100 p-8 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md bg-opacity-90">
                                <div>
                                    <button
                                        onClick={() => setActiveChapter(null)}
                                        className="text-sm font-bold text-gray-500 hover:text-indigo-600 flex items-center gap-1 mb-2 transition-colors"
                                    >
                                        ← Back to {activeSubject.name}
                                    </button>
                                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeSubject.color}`}>
                                            Chapter {activeChapter.id}:
                                        </span> {activeChapter.title}
                                    </h2>
                                </div>
                                <div className="hidden sm:block">
                                    <span className="text-6xl opacity-20">{activeSubject.icon}</span>
                                </div>
                            </div>

                            {/* Chapter Content */}
                            <div className="p-8 space-y-12">

                                {/* Topics/Sections */}
                                <div className="grid gap-8">
                                    {activeChapter.sections.map((section, idx) => (
                                        <div key={idx} className="bg-white rounded-xl border-l-4 border-indigo-500 pl-6 py-2 transition-all hover:bg-indigo-50/30">
                                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                                                    {idx + 1}
                                                </span>
                                                {section.title}
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-2">
                                                {/* Handling both simple string array and Topic object array is a bit tricky in TS without types.
                             Assuming simple strings for now based on data structure provided. */}
                                                {(section.content as any[]).map((point, pIdx) => (
                                                    <li key={pIdx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg text-gray-700 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all">
                                                        <span className="text-green-500 mt-1">✓</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Practice Questions */}
                                {activeChapter.practiceQuestions.length > 0 && (
                                    <div className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                                        <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                            <span>📝</span> Practice Zone
                                        </h3>
                                        <div className="space-y-4">
                                            {activeChapter.practiceQuestions.map((q, qIdx) => (
                                                <div key={qIdx} className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 flex items-start gap-4 transition-transform hover:scale-[1.01]">
                                                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-bold shadow-md">
                                                        Q{qIdx + 1}
                                                    </span>
                                                    <p className="text-lg text-gray-800 font-medium pt-1">{q}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* Footer for navigation */}
                            <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between">
                                <button
                                    onClick={() => {
                                        const prevId = activeChapter.id - 1;
                                        if (prevId > 0) setActiveChapter(activeSubject.chapters[prevId - 1]);
                                    }}
                                    disabled={activeChapter.id === 1}
                                    className="px-6 py-3 rounded-xl font-bold bg-white border border-gray-200 text-gray-600 disabled:opacity-50 hover:bg-gray-100 transition-colors"
                                >
                                    Previous Chapter
                                </button>
                                <button
                                    onClick={() => {
                                        const nextId = activeChapter.id + 1;
                                        if (nextId <= activeSubject.chapters.length) setActiveChapter(activeSubject.chapters[nextId - 1]);
                                    }}
                                    disabled={activeChapter.id === activeSubject.chapters.length}
                                    className="px-6 py-3 rounded-xl font-bold bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:shadow-none"
                                >
                                    Next Chapter
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Class6;
