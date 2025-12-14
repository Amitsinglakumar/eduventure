import React from 'react';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  xpReward: number;
};

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <section aria-label="Task list" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 select-none">To-Do Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
            <label className="flex items-center space-x-4 cursor-pointer">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
                className="form-checkbox h-5 w-5 text-indigo-600"
                aria-checked={task.completed}
              />
              <span className={`select-none text-gray-800 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </span>
            </label>
            <span className="text-indigo-600 font-semibold select-none">+{task.xpReward} XP</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
