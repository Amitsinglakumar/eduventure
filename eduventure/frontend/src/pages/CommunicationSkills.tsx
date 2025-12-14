import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Mic, Award, Clock, TrendingUp, Volume2 } from 'lucide-react';

const CommunicationSkills = () => {
    const skills = [
        {
            title: "Reading Comprehension",
            icon: BookOpen,
            color: "blue",
            description: "Master the art of understanding text",
            activities: [
                { name: "Short Stories", time: "10 min", level: "Beginner" },
                { name: "Articles & Essays", time: "15 min", level: "Intermediate" },
                { name: "Research Papers", time: "20 min", level: "Advanced" }
            ]
        },
        {
            title: "Writing Excellence",
            icon: PenTool,
            color: "green",
            description: "Express ideas clearly and creatively",
            activities: [
                { name: "Grammar Practice", time: "8 min", level: "Beginner" },
                { name: "Essay Writing", time: "25 min", level: "Intermediate" },
                { name: "Creative Composition", time: "30 min", level: "Advanced" }
            ]
        },
        {
            title: "Speaking Practice",
            icon: Mic,
            color: "purple",
            description: "Build confidence in verbal communication",
            activities: [
                { name: "Pronunciation Guide", time: "5 min", level: "Beginner" },
                { name: "Public Speaking", time: "15 min", level: "Intermediate" },
                { name: "Debate & Discussion", time: "20 min", level: "Advanced" }
            ]
        }
    ];

    const achievements = [
        { label: "Words Read", value: "12,450", icon: BookOpen },
        { label: "Essays Written", value: "23", icon: PenTool },
        { label: "Speaking Hours", value: "18", icon: Mic }
    ];

    return (
        <div className="p-8 min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-4xl font-bold text-slate-800 mb-2">Communication Skills</h1>
                <p className="text-slate-500">Master reading, writing, and speaking for academic and professional success.</p>
            </motion.div>

            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {achievements.map((achievement, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 font-medium">{achievement.label}</p>
                                <p className="text-3xl font-bold text-slate-800 mt-1">{achievement.value}</p>
                            </div>
                            <div className="p-4 bg-teal-100 rounded-xl text-teal-600">
                                <achievement.icon size={24} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Skill Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100"
                    >
                        <div className={`w-16 h-16 rounded-2xl bg-${skill.color}-100 flex items-center justify-center mb-4 text-${skill.color}-600`}>
                            <skill.icon size={32} />
                        </div>

                        <h2 className="text-2xl font-bold text-slate-800 mb-2">{skill.title}</h2>
                        <p className="text-slate-500 text-sm mb-6">{skill.description}</p>

                        <div className="space-y-3">
                            {skill.activities.map((activity, actIdx) => (
                                <div
                                    key={actIdx}
                                    className="group p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-transparent hover:border-teal-200 transition-all cursor-pointer"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-slate-700 group-hover:text-teal-600">{activity.name}</h4>
                                        <span className={`text-xs px-2 py-1 rounded-full bg-${skill.color}-100 text-${skill.color}-700 font-semibold`}>
                                            {activity.level}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} /> {activity.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <TrendingUp size={12} /> Track Progress
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className={`mt-6 w-full py-3 bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 hover:from-${skill.color}-600 hover:to-${skill.color}-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl`}>
                            Start Practice
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Daily Challenge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Award size={24} />
                            <h3 className="text-2xl font-bold">Daily Communication Challenge</h3>
                        </div>
                        <p className="text-indigo-100 mb-4">Complete today's reading + speaking task to earn 50 XP!</p>
                        <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                            Start Challenge
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Volume2 size={48} className="text-white" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CommunicationSkills;
