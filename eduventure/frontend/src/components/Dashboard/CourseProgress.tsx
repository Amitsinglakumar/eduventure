import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

type CourseProgressProps = {
  courses: {
    id: string;
    title: string;
    completedLessons: number;
    totalLessons: number;
  }[];
};

const CourseProgress: React.FC<CourseProgressProps> = ({ courses }) => {
  return (
    <section
      aria-label="Course progress overview"
      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <BookOpen className="text-indigo-600" size={22} />
        Learning Progress
      </h2>

      <div className="space-y-6">
        {courses.map(
          ({ id, title, completedLessons, totalLessons }) => {
            const progressPercent = Math.round(
              (completedLessons / totalLessons) * 100
            );
            const isCompleted = progressPercent === 100;

            return (
              <div
                key={id}
                className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-indigo-300 transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    {isCompleted ? (
                      <CheckCircle
                        size={18}
                        className="text-green-600"
                      />
                    ) : (
                      <BookOpen
                        size={18}
                        className="text-indigo-600"
                      />
                    )}
                    <h3 className="font-semibold text-gray-800">
                      {title}
                    </h3>
                  </div>

                  <span
                    className={`text-sm font-semibold ${
                      isCompleted
                        ? "text-green-600"
                        : "text-indigo-600"
                    }`}
                  >
                    {progressPercent}%
                  </span>
                </div>

                <div
                  className="w-full bg-gray-200 rounded-full h-3 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={progressPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${title} progress`}
                >
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ${
                      isCompleted
                        ? "bg-green-500"
                        : "bg-indigo-600"
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  {completedLessons} of {totalLessons} lessons completed
                </p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default CourseProgress;
