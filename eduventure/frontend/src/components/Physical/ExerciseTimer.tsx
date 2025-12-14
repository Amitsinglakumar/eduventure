import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

interface ExerciseTimerProps {
  onClose: () => void;
}

const ExerciseTimer: React.FC<ExerciseTimerProps> = ({ onClose }) => {
  // XP add karne aur physical activity complete karne ke liye context functions
  const { addXP, completeActivity } = useEduVenture();

  // Timer state variables - minutes, seconds, aur running status
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Jab timer khatam ho jaye
            completeExercise();
            return;
          }
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }

    // Cleanup interval on unmount or re-render
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  // Exercise complete hone par call hone wala function
  const completeExercise = () => {
    setIsRunning(false);
    addXP(20); // 20 XP add karo
    completeActivity('physical'); // Physical activity mark complete karo
    alert('🎉 Exercise completed! You earned 20 XP!');
    onClose(); // Modal band karo
  };

  // Timer start/stop toggle karne ke liye
  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  // Timer reset function
  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(10);
    setSeconds(0);
  };

  // Time formatting for display, 2 digits
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl animate-bounce-in">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-800 select-none">Exercise Timer</h3>
          <button
            onClick={onClose}
            aria-label="Close exercise timer"
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Timer display */}
        <div className="text-center mb-8 select-none">
          <div className="text-6xl font-bold text-red-500 mb-4 font-mono">
            {formatTime(minutes)}:{formatTime(seconds)}
          </div>
          <p className="text-lg text-gray-600 mb-6">Morning Stretches & Movement</p>
        </div>

        {/* Control buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleTimer}
            disabled={minutes === 0 && seconds === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-400 ${
              isRunning
                ? 'bg-gray-500 hover:bg-gray-600 text-white'
                : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg'
            }`}
            aria-pressed={isRunning}
            aria-label={isRunning ? 'Pause timer' : 'Start timer'}
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
            <span>{isRunning ? 'Pause' : 'Start'}</span>
          </button>

          <button
            onClick={resetTimer}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-400"
            aria-label="Reset timer"
          >
            <RotateCcw size={20} />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseTimer;
