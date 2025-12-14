import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    GraduationCap,
    Briefcase,
    Trophy,
    Cpu,
    MessageCircle,
    Map,
    Palette
} from 'lucide-react';
import ModuleCard from '../components/Dashboard/ModuleCard';
import GamificationStats from '../components/Dashboard/GamificationStats';

const Dashboard = () => {
    const modules = [
        {
            title: "Kindergarten",
            description: "Stories, Poems, and AI Voices for kids.",
            icon: Palette,
            to: "/kindergarten",
            color: "yellow" as const
        },
        {
            title: "Secondary School",
            description: "CBSE, ICSE, and State Board Curriculum.",
            icon: BookOpen,
            to: "/secondary",
            color: "blue" as const
        },
        {
            title: "Higher Education",
            description: "Engineering, Medical, and Arts streams.",
            icon: GraduationCap,
            to: "/higher-education",
            color: "green" as const
        },
        {
            title: "Competitive Exams",
            description: "JEE, NEET, UPSC, and more.",
            icon: Trophy,
            to: "/competitive-exams",
            color: "yellow" as const
        },
        {
            title: "AR / VR Learning",
            description: "Immersive 3D learning experiences.",
            icon: Cpu,
            to: "/ar-learning",
            color: "blue" as const
        },
        {
            title: "Communication Skills",
            description: "Master reading, writing, and speaking.",
            icon: MessageCircle,
            to: "/communication",
            color: "green" as const
        },
        {
            title: "Career Roadmap",
            description: "Interactive T-Point career paths.",
            icon: Map,
            to: "/career-roadmap",
            color: "red" as const
        },
        {
            title: "AI Tutor",
            description: "Personalized AI assistance.",
            icon: Cpu,
            to: "/ai-tutor",
            color: "blue" as const
        }
    ];

    return (
        <div className="p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Welcome back, Explorer!
                </h1>
                <p className="text-gray-400 mt-2">Ready to continue your learning journey?</p>
            </motion.div>

            <GamificationStats />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                {modules.map((module, index) => (
                    <ModuleCard
                        key={index}
                        {...module}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Dashboard;
