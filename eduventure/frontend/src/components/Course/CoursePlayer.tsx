import React, { useState } from "react";
import { Play, CheckCircle, ArrowLeft, Star } from "lucide-react";
import { useEduVenture } from "../../context/EduVentureContext";

interface CoursePlayerProps {
  subjectId: string;
  lessonId: string;
  onBack: () => void;
}

const XP_REWARD = 50;

const CoursePlayer: React.FC<CoursePlayerProps> = ({
  subjectId,
  lessonId,
  onBack,
}) => {
  const { addXP } = useEduVenture();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    if (isCompleted) return;
    addXP(XP_REWARD);
    setIsCompleted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeft size={22} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-800">
              {subjectId.toUpperCase()}
            </h1>
            <p className="text-sm text-gray-500">Lesson • {lessonId}</p>
          </div>
        </div>

        {/* XP Badge */}
        <div className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold">
          <Star size={18} />
          {XP_REWARD} XP
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Video Player */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <Play
              size={70}
              className="absolute inset-0 m-auto text-white opacity-80 group-hover:scale-110 transition-transform"
            />
            <p className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition">
              ▶ Start Lesson
            </p>
          </div>

          {/* Lesson Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Introduction to {subjectId}
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                This lesson introduces you to the core concepts of{" "}
                <span className="font-medium text-gray-800">{subjectId}</span>.
                Watch the video carefully and complete the lesson to earn XP
                and unlock new challenges.
              </p>
            </div>

            {/* Lesson Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>⏱ 15 Minutes</span>
              <span>🎯 Beginner Friendly</span>
              <span>🏆 Reward: {XP_REWARD} XP</span>
            </div>

            {/* Action */}
            <div className="flex items-center justify-between pt-6 border-t">
              <p className="text-sm text-gray-500">
                Complete the lesson to continue your adventure
              </p>

              <button
                onClick={handleComplete}
                disabled={isCompleted}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition ${
                  isCompleted
                    ? "bg-green-100 text-green-700 cursor-default"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle size={20} />
                    Lesson Completed
                  </>
                ) : (
                  "Mark as Complete"
                )}
              </button>
            </div>
          </div>

          {/* Completion Reward */}
          {isCompleted && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-green-700">
                🎉 Congratulations!
              </h3>
              <p className="text-green-600 mt-2">
                You earned <strong>{XP_REWARD} XP</strong>. Keep learning to
                unlock more levels!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CoursePlayer;
