import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: 'red' | 'blue' | 'green' | 'yellow'; // predefined colors
}

const colorClasses = {
  red: {
    border: 'border-red-500',
    bgHover: 'group-hover:bg-red-500/20',
    text: 'text-red-400 group-hover:text-red-300',
  },
  blue: {
    border: 'border-blue-500',
    bgHover: 'group-hover:bg-blue-500/20',
    text: 'text-blue-400 group-hover:text-blue-300',
  },
  green: {
    border: 'border-green-500',
    bgHover: 'group-hover:bg-green-500/20',
    text: 'text-green-400 group-hover:text-green-300',
  },
  yellow: {
    border: 'border-yellow-500',
    bgHover: 'group-hover:bg-yellow-500/20',
    text: 'text-yellow-400 group-hover:text-yellow-300',
  },
};

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, icon: Icon, to, color }) => {
  const classes = colorClasses[color];

  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          'p-6 rounded-2xl bg-gray-800 border border-gray-700 transition-all duration-300 h-full group',
          classes.border
        )}
      >
        <div className={clsx('p-3 rounded-xl bg-gray-700/50 w-fit mb-4', classes.bgHover)}>
          <Icon className={clsx('w-8 h-8 transition-colors', classes.text)} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </motion.div>
    </Link>
  );
};

export default ModuleCard;
