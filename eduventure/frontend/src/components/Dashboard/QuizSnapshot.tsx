import React from 'react';

type QuizSnapshotProps = {
  quizzes: {
    id: string;
    title: string;
    attemptsLeft: number;
    timeRemainingMinutes: number | null; // null if no timer
    isActive: boolean;
  }[];
  onQuizClick: (quizId: string) => void;
};

const QuizSnapshot: React.FC<QuizSnapshotProps> = ({ quizzes, onQuizClick }) => {
  return (
    <section aria-label="Active quizzes snapshot" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 select-none">Active Quizzes</h2>
      {quizzes.length === 0 ? (
        <p className="text-gray-600 text-center">No active quizzes currently.</p>
      ) : (
        <ul className="space-y-4">
          {quizzes.map(({ id, title, attemptsLeft, timeRemainingMinutes, isActive }) => (
            <li
              key={id}
              className={`p-4 rounded-xl border flex justify-between items-center cursor-pointer transition-colors duration-200 ${
                isActive ? 'bg-indigo-50 border-indigo-300 hover:bg-indigo-100' : 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
              }`}
              onClick={() => { if (isActive) onQuizClick(id); }}
              tabIndex={isActive ? 0 : -1}
              aria-disabled={!isActive}
              role="button"
              aria-label={`Quiz: ${title}. ${isActive ? 'Click to start or continue.' : 'Inactive or unavailable.'}`}
            >
              <span className="font-semibold text-gray-800 truncate">{title}</span>
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>{attemptsLeft} {attemptsLeft === 1 ? 'attempt' : 'attempts'} left</span>
                {timeRemainingMinutes !== null && (
                  <span>{timeRemainingMinutes} min remaining</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default QuizSnapshot;
