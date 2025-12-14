import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Cpu, Activity, Building2, Stethoscope, Microscope, Calculator, LineChart, ChevronRight, Book } from 'lucide-react';

const HigherEducation = () => {
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const navigate = useNavigate();

  const streams = [
    {
      id: "engineering",
      title: "Engineering",
      icon: Cpu,
      color: "blue",
      branches: [
        { name: "Computer Science", icon: Code, desc: "DSA, AI/ML, Web Dev" },
        { name: "Electronics", icon: Activity, desc: "Circuits, IoT, Robotics" },
        { name: "Mechanical", icon: Building2, desc: "Thermodynamics, CAD" },
        { name: "Civil", icon: Building2, desc: "Structures, Materials" }
      ]
    },
    {
      id: "medical",
      title: "Medical",
      icon: Stethoscope,
      color: "green",
      branches: [
        { name: "MBBS", icon: Stethoscope, desc: "Anatomy, Physiology" },
        { name: "Pharmacology", icon: Microscope, desc: "Drugs, Interactions" },
        { name: "Biotech", icon: Activity, desc: "Genetics, Bio-processes" }
      ]
    },
    {
      id: "commerce",
      title: "Commerce",
      icon: LineChart,
      color: "yellow",
      branches: [
        { name: "Chartered Accountancy", icon: Calculator, desc: "Accounting, Audit" },
        { name: "MBA", icon: LineChart, desc: "Business, Management" },
        { name: "Economics", icon: LineChart, desc: "Micro/Macro Economics" }
      ]
    }
  ];

  return (
    <div className="p-8 min-h-screen bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-800">Higher Education</h1>
        <p className="text-slate-500 mt-2">Specialized tracks for University and College students.</p>
      </motion.div>

      {/* Stream Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {streams.map((stream) => (
          <motion.div
            key={stream.id}
            onClick={() => setSelectedStream(stream.id)}
            whileHover={{ y: -5 }}
            className={`p-6 bg-white rounded-2xl shadow-sm border-b-4 border-${stream.color}-500 cursor-pointer transition-all ${selectedStream === stream.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
          >
            <div className={`w-14 h-14 rounded-xl bg-${stream.color}-100 flex items-center justify-center mb-4 text-${stream.color}-600`}>
              <stream.icon size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{stream.title}</h2>
            <p className="text-slate-500 mt-2 text-sm">Explore branches and specialized courses.</p>
          </motion.div>
        ))}
      </div>

      {/* Branch Details */}
      {selectedStream && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-800">
              {streams.find(s => s.id === selectedStream)?.title} Branches
            </h3>
            <button
              onClick={() => setSelectedStream(null)}
              className="text-sm text-slate-500 hover:text-blue-500"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streams.find(s => s.id === selectedStream)?.branches.map((branch, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (branch.name === "Computer Science") {
                    navigate('/higher-education/engineering-cs');
                  } else if (branch.name === "MBBS") {
                    navigate('/higher-education/medical-mbbs');
                  } else if (branch.name === "Chartered Accountancy" || branch.name === "MBA" || branch.name === "Economics") {
                    // Linking all commerce branches to the B.Com/Commerce roadmap for now as a comprehensive guide
                    navigate('/higher-education/commerce-bcom');
                  }
                }}
                className="group p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md text-blue-600">
                    <branch.icon size={20} />
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mt-4">{branch.name}</h4>
                <p className="text-sm text-slate-400 font-medium group-hover:text-blue-500/70">{branch.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-600">
                  <Book size={14} /> 8 Modules
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HigherEducation;
