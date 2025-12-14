import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Briefcase, GraduationCap, TrendingUp, Target, Lightbulb, MapPin } from 'lucide-react';

const CareerRoadmap = () => {
    const [selectedPath, setSelectedPath] = useState<string | null>(null);

    const careerPaths = [
        {
            id: "tech",
            title: "Technology",
            icon: "💻",
            color: "blue",
            roles: ["Software Engineer", "Data Scientist", "AI Specialist", "DevOps Engineer"],
            education: ["B.Tech CSE", "Certifications", "Masters (Optional)"]
        },
        {
            id: "medical",
            title: "Medical",
            icon: "⚕️",
            color: "red",
            roles: ["Doctor", "Surgeon", "Medical Researcher", "Specialist"],
            education: ["MBBS", "Specialization", "Super-Specialization"]
        },
        {
            id: "business",
            title: "Business",
            icon: "📊",
            color: "green",
            roles: ["Entrepreneur", "Business Analyst", "Consultant", "Manager"],
            education: ["BBA/B.Com", "MBA", "Professional Certifications"]
        },
        {
            id: "creative",
            title: "Creative Arts",
            icon: "🎨",
            color: "purple",
            roles: ["Designer", "Content Creator", "Filmmaker", "Artist"],
            education: ["Fine Arts", "Design School", "Workshops"]
        }
    ];

    return (
        <div className="p-8 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl text-white shadow-lg">
                        <Compass size={32} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800">Career Roadmap</h1>
                        <p className="text-slate-500 mt-1">Navigate your future with T-Point career visualization.</p>
                    </div>
                </div>
            </motion.div>

            {/* T-Point Visualization Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <MapPin className="text-orange-500" />
                    Your T-Point Journey
                </h2>

                <div className="relative py-12">
                    {/* Central Node */}
                    <div className="flex justify-center mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="relative"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                                <GraduationCap size={40} />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                <p className="text-sm font-bold text-slate-600">Class 10</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Branching Paths */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {careerPaths.map((path, idx) => (
                            <motion.div
                                key={path.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedPath(path.id)}
                                className={`cursor-pointer transition-all ${selectedPath === path.id ? 'scale-105' : ''}`}
                            >
                                {/* Connection Line */}
                                <div className="flex justify-center mb-4">
                                    <div className={`w-1 h-16 bg-gradient-to-b from-${path.color}-300 to-${path.color}-500`} />
                                </div>

                                {/* Path Card */}
                                <div className={`p-6 rounded-2xl border-2 transition-all ${selectedPath === path.id
                                        ? `border-${path.color}-500 bg-${path.color}-50 shadow-lg`
                                        : 'border-slate-200 bg-white hover:border-slate-300'
                                    }`}>
                                    <div className="text-5xl mb-3 text-center">{path.icon}</div>
                                    <h3 className="text-lg font-bold text-slate-800 text-center mb-2">{path.title}</h3>
                                    <div className="text-xs text-slate-500 text-center">
                                        {path.roles.length} Career Options
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Path Details */}
            {selectedPath && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
                >
                    {(() => {
                        const path = careerPaths.find(p => p.id === selectedPath);
                        if (!path) return null;

                        return (
                            <>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                                        <span className="text-4xl">{path.icon}</span>
                                        {path.title} Career Path
                                    </h3>
                                    <button
                                        onClick={() => setSelectedPath(null)}
                                        className="text-sm text-slate-500 hover:text-slate-700 font-medium"
                                    >
                                        Close Details
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Education Track */}
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                                            <GraduationCap className="text-blue-500" size={20} />
                                            Education Pathway
                                        </h4>
                                        <div className="space-y-3">
                                            {path.education.map((edu, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                                                        {idx + 1}
                                                    </div>
                                                    <div className="flex-1 p-3 bg-blue-50 rounded-lg border border-blue-100">
                                                        <p className="font-semibold text-slate-700">{edu}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Career Options */}
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                                            <Briefcase className="text-green-500" size={20} />
                                            Career Opportunities
                                        </h4>
                                        <div className="space-y-3">
                                            {path.roles.map((role, idx) => (
                                                <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors cursor-pointer">
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-semibold text-slate-700">{role}</p>
                                                        <Target className="text-green-600" size={16} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-200">
                                    <div className="flex items-start gap-3">
                                        <Lightbulb className="text-amber-600 mt-1" size={24} />
                                        <div>
                                            <h5 className="font-bold text-slate-800 mb-2">Pro Tip</h5>
                                            <p className="text-sm text-slate-600">
                                                Start exploring this field early! Take relevant courses, do internships, and connect with professionals in {path.title.toLowerCase()}.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })()}
                </motion.div>
            )}

            {/* Call to Action */}
            {!selectedPath && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 p-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl text-white shadow-2xl"
                >
                    <TrendingUp size={48} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Discover Your Perfect Career Path</h3>
                    <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                        Click on any career path above to explore education requirements and job opportunities. Your future starts here!
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default CareerRoadmap;
