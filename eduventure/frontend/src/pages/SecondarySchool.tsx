import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Award, CheckCircle, ChevronRight, GraduationCap } from 'lucide-react';

const SecondarySchool = () => {
    const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
    const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

    const navigate = useNavigate();

    const boards = [
        { id: 'cbse', name: 'CBSE', fullName: 'Central Board of Secondary Education', color: 'blue' },
        { id: 'icse', name: 'ICSE', fullName: 'Indian Certificate of Secondary Education', color: 'indigo' },
        { id: 'state', name: 'State Boards', fullName: 'State Level Curriculum', color: 'green' }
    ];

    const grades = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

    const handleGradeSelect = (grade: string) => {
        const gradeNum = grade.split(' ')[1];
        if (['6', '7', '8', '9', '10'].includes(gradeNum)) {
            navigate(`/class${gradeNum}`);
        } else {
            setSelectedGrade(grade);
        }
    };

    const subjects = [
        { name: 'Mathematics', icon: '📐', color: 'bg-blue-100 text-blue-600' },
        { name: 'Science', icon: '🧬', color: 'bg-green-100 text-green-600' },
        { name: 'English', icon: '📖', color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Social Studies', icon: '🌍', color: 'bg-orange-100 text-orange-600' },
        { name: 'Computer Science', icon: '💻', color: 'bg-purple-100 text-purple-600' },
        { name: 'Hindi', icon: '🕉️', color: 'bg-red-100 text-red-600' }
    ];

    return (
        <div className="p-8 min-h-screen bg-slate-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold text-slate-800">Secondary Education</h1>
                <p className="text-slate-500 mt-2">Personalized learning for your curriculum.</p>
            </motion.div>

            {/* Step 1: Board Selection */}
            {!selectedBoard && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                >
                    <h2 className="text-xl font-semibold text-slate-700">Select your Board</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {boards.map((board) => (
                            <motion.div
                                key={board.id}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedBoard(board.id)}
                                className={`p-6 bg-white rounded-2xl border-2 border-transparent hover:border-${board.color}-500 shadow-sm cursor-pointer transition-all group`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-${board.color}-100 flex items-center justify-center mb-4 text-${board.color}-600`}>
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{board.name}</h3>
                                <p className="text-slate-500 text-sm mt-1">{board.fullName}</p>
                                <div className={`mt-4 flex items-center text-${board.color}-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
                                    Select <ChevronRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Step 2: Grade Selection */}
            {selectedBoard && !selectedGrade && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <button
                        onClick={() => setSelectedBoard(null)}
                        className="text-slate-500 hover:text-slate-700 text-sm flex items-center gap-1"
                    >
                        ← Back to Boards
                    </button>

                    <h2 className="text-xl font-semibold text-slate-700">Select your Class</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {grades.map((grade) => (
                            <motion.button
                                key={grade}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleGradeSelect(grade)}
                                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-semibold text-slate-700"
                            >
                                {grade}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Step 3: Subject Dashboard */}
            {selectedBoard && selectedGrade && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">{selectedGrade} • {selectedBoard.toUpperCase()}</h3>
                                <button onClick={() => setSelectedGrade(null)} className="text-xs text-blue-500 hover:underline">Change</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group"
                            >
                                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl ${subject.color}`}>
                                    {subject.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{subject.name}</h3>
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <span>Progress</span>
                                        <span>32%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[32%]" />
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                                    <span className="text-xs font-semibold text-slate-400">12 Chapters</span>
                                    <button className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg font-medium group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        Continue
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default SecondarySchool;
