import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Interfaces for State

interface Student {
  name: string;
  level: number;
  totalXP: number;
  streak: number;
  badges: string[];
}

interface Activity {
  type: string;
  title: string;
  icon: string;
  xp: number;
  completed: boolean;
}

interface Subject {
  id: string;
  name: string;
  icon: string;
  levels: string[];
  xp_per_level: number;
  progress: number;
}

interface Achievement {
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

interface PhysicalActivity {
  name: string;
  duration: string;
  type: string;
}

interface MoralStory {
  title: string;
  source: string;
  lesson: string;
  content: string;
}

interface Shloka {
  sanskrit: string;
  translation: string;
  source: string;
}

interface EduVentureState {
  currentSection: string;
  student: Student;
  subjects: Subject[];
  activities: Activity[];
  achievements: Achievement[];
  physical_activities: PhysicalActivity[];
  moral_stories: MoralStory[];
  shlokas: Shloka[];
  isLoggedIn: boolean;
}

// Initial State - realistic sample data with gamification features
const initialState: EduVentureState = {
  currentSection: 'dashboard',
  isLoggedIn: false,

  student: {
    name: "Guest",
    level: 1,
    totalXP: 0,
    streak: 0,
    badges: []
  },

  subjects: [
    {
      id: "math",
      name: "Mathematics",
      icon: "🔢",
      levels: ["Addition & Subtraction", "Multiplication & Division", "Fractions", "Geometry"],
      xp_per_level: 100,
      progress: 75,
    },
    {
      id: "hindi",
      name: "Hindi Language",
      icon: "🇮🇳",
      levels: ["Alphabets & Words", "Grammar", "Reading", "Writing"],
      xp_per_level: 80,
      progress: 60,
    },
    {
      id: "english",
      name: "English",
      icon: "🇬🇧",
      levels: ["Speaking", "Listening", "Reading", "Writing"],
      xp_per_level: 80,
      progress: 85,
    },
    {
      id: "science",
      name: "Science",
      icon: "🔬",
      levels: ["Nature Study", "Simple Experiments", "Animals & Plants", "Weather"],
      xp_per_level: 90,
      progress: 45,
    },
    {
      id: "moral",
      name: "Moral Education",
      icon: "🕉️",
      levels: ["Good Habits", "Epic Stories", "Values", "Citizenship"],
      xp_per_level: 70,
      progress: 90,
    }
  ],

  activities: [
    {
      type: "daily_challenge",
      title: "Solve 5 Math Problems",
      icon: "🔢",
      xp: 25,
      completed: false,
    },
    {
      type: "physical",
      title: "10 Minutes Exercise",
      icon: "🏃‍♂️",
      xp: 20,
      completed: true,
    },
    {
      type: "reading",
      title: "Read Panchatantra Story",
      icon: "📚",
      xp: 30,
      completed: false,
    },
    {
      type: "moral",
      title: "Learn New Shloka",
      icon: "🕉️",
      xp: 15,
      completed: false,
    }
  ],

  achievements: [
    {
      name: "Scholar",
      description: "Complete 10 lessons in any subject",
      icon: "🎓",
      unlocked: true,
    },
    {
      name: "Athlete",
      description: "Exercise for 7 consecutive days",
      icon: "🏃‍♂️",
      unlocked: true,
    },
    {
      name: "Storyteller",
      description: "Listen to 20 moral stories",
      icon: "📚",
      unlocked: false,
    },
    {
      name: "Discipline Master",
      description: "Complete daily challenges for 30 days",
      icon: "💪",
      unlocked: false,
    }
  ],

  physical_activities: [
    {
      name: "Morning Exercises",
      duration: "10 minutes",
      type: "Stretching & Basic Movements",
    },
    {
      name: "Outdoor Games",
      duration: "30 minutes",
      type: "Running, Jumping, Playing",
    },
    {
      name: "Yoga for Kids",
      duration: "15 minutes",
      type: "Simple Yoga Poses",
    },
    {
      name: "Dance & Movement",
      duration: "20 minutes",
      type: "Fun Dance Activities",
    }
  ],

  moral_stories: [
    {
      title: "The Honest Woodcutter",
      source: "Panchatantra",
      lesson: "Honesty is always rewarded",
      content: "Once upon a time, there was a poor woodcutter who worked hard every day to earn his living. One day, while cutting wood near a river, his axe slipped from his hands and fell into the deep water. The woodcutter was very sad because the axe was his only tool for work. Suddenly, the river god appeared and asked what was wrong. When the woodcutter explained his problem, the god dived into the water and brought back a golden axe. 'Is this yours?' asked the god. 'No, sir,' replied the honest woodcutter. The god then brought a silver axe, but again the woodcutter said it wasn't his. Finally, the god brought the woodcutter's old iron axe. 'Yes, this is mine!' said the woodcutter happily. The god was so impressed by the woodcutter's honesty that he gave him all three axes as a reward."
    },
    {
      title: "Krishna and the Butter",
      source: "Bhagavata",
      lesson: "Love conquers all",
      content: "Little Krishna was very fond of butter and would often steal it from his mother Yashoda's pots. The village women would complain to Yashoda about Krishna's mischief. One day, Yashoda decided to tie Krishna to a heavy grinding stone as punishment. But when she tried to tie the rope around Krishna's waist, she found that the rope was always two fingers short. She brought more and more rope, but it was never enough. Finally, when Krishna saw his mother's love and effort, he allowed himself to be tied. This story teaches us that divine love cannot be bound by rules, but it responds to pure devotion and love."
    },
    {
      title: "Hanuman's Devotion",
      source: "Ramayana",
      lesson: "Dedication and service to others",
      content: "When Lord Rama was searching for Sita, he met Hanuman, the mighty monkey warrior. Hanuman immediately devoted himself to serving Rama and helping find Sita. He leaped across the ocean to Lanka, found Sita in the garden, and delivered Rama's message to her. Throughout the journey, Hanuman never thought of his own comfort or safety. His only thought was to serve his Lord faithfully. When the war was won and Sita was rescued, Rama offered Hanuman any reward he desired. But Hanuman only asked for the blessing to always remember and serve Rama. His selfless devotion and service became an example for all."
    }
  ],

  shlokas: [
    {
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
      translation: "You have the right to perform your duty, but not to the fruits of action.",
      source: "Bhagavad Gita"
    },
    {
      sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्",
      translation: "Knowledge gives humility, from humility comes worthiness.",
      source: "Hitopadesha"
    },
    {
      sanskrit: "सत्यं वद धर्मं चर स्वाध्यायान्मा प्रमदः",
      translation: "Speak the truth, practice righteousness, do not neglect your studies.",
      source: "Taittiriya Upanishad"
    }
  ]
};

// Action Types to maintain state predictions
type Action =
  | { type: 'SET_SECTION'; payload: string }
  | { type: 'COMPLETE_ACTIVITY'; payload: string }
  | { type: 'ADD_XP'; payload: number }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: string }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: string }
  | { type: 'UPDATE_STREAK' }
  | { type: 'LOGIN_SUCCESS'; payload: Student };

// Reducer: handles actions dispatched to change the state
const eduVentureReducer = (state: EduVentureState, action: Action): EduVentureState => {
  switch (action.type) {
    // Change the currently viewed section/page
    case 'SET_SECTION':
      return { ...state, currentSection: action.payload };

    // Mark an activity completed by type
    case 'COMPLETE_ACTIVITY':
      return {
        ...state,
        activities: state.activities.map(activity =>
          activity.type === action.payload
            ? { ...activity, completed: true }
            : activity
        )
      };

    // Add XP points, update student XP and calculate level ups
    case 'ADD_XP':
      const newTotalXP = state.student.totalXP + action.payload;
      const newLevel = Math.floor(newTotalXP / 200) + 1;

      return {
        ...state,
        student: {
          ...state.student,
          totalXP: newTotalXP,
          level: newLevel > state.student.level ? newLevel : state.student.level
        }
      };

    // Unlock an achievement and add badge if not already present
    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        achievements: state.achievements.map(achievement =>
          achievement.name === action.payload
            ? { ...achievement, unlocked: true }
            : achievement
        ),
        student: {
          ...state.student,
          badges: state.student.badges.includes(action.payload)
            ? state.student.badges
            : [...state.student.badges, action.payload]
        }
      };

    // Increment learning streak by one day
    case 'UPDATE_STREAK':
      return {
        ...state,
        student: {
          ...state.student,
          streak: state.student.streak + 1
        }
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        student: action.payload
      };

    default:
      return state;
  }
};

// Context Type with state, dispatch and action functions for UI components
interface EduVentureContextType {
  state: EduVentureState;
  dispatch: React.Dispatch<Action>;

  setCurrentSection: (section: string) => void;
  completeActivity: (activityType: string) => void;
  addXP: (amount: number) => void;
  unlockAchievement: (achievementName: string) => void;
  updateStreak: () => void;
  loginAsGuest: (name: string) => Promise<void>;
  logout: () => void;
}

// Create context with initial undefined for safety
const EduVentureContext = createContext<EduVentureContextType | undefined>(undefined);

// Provider component that wraps entire app and supplies state + actions
export const EduVentureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const initializer = (initial: EduVentureState): EduVentureState => {
    try {
      const savedUser = localStorage.getItem('eduventure_user');
      if (savedUser) {
        return {
          ...initial,
          isLoggedIn: true,
          student: JSON.parse(savedUser)
        };
      }
    } catch (e) {
      console.error("Failed to load user from storage", e);
    }
    return initial;
  };

  const [state, dispatch] = useReducer(eduVentureReducer, initialState, initializer);

  // Functions to dispatch state actions - exposed to UI components

  const setCurrentSection = (section: string) => {
    dispatch({ type: 'SET_SECTION', payload: section });
  };

  const completeActivity = (activityType: string) => {
    dispatch({ type: 'COMPLETE_ACTIVITY', payload: activityType });
  };

  const addXP = (amount: number) => {
    dispatch({ type: 'ADD_XP', payload: amount });
    // Update local storage with new XP
    if (state.isLoggedIn) {
      const updatedStudent = { ...state.student, totalXP: state.student.totalXP + amount };
      localStorage.setItem('eduventure_user', JSON.stringify(updatedStudent));
    }
  };

  const unlockAchievement = (achievementName: string) => {
    dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: achievementName });
  };

  const updateStreak = () => {
    dispatch({ type: 'UPDATE_STREAK' });
  };

  const loginAsGuest = async (name: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/guest-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // Transform backend user to frontend student format
      const studentData: Student = {
        name: data.user.name,
        level: data.user.level || 1,
        totalXP: data.user.totalXP || 0,
        streak: data.user.streak || 0,
        badges: data.user.badges || [],
      };

      localStorage.setItem('eduventure_user', JSON.stringify(studentData));
      dispatch({ type: 'LOGIN_SUCCESS', payload: studentData });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('eduventure_user');
    // refresh or dispatch logout action
    window.location.href = '/login';
  };

  return (
    <EduVentureContext.Provider value={{
      state,
      dispatch,
      setCurrentSection,
      completeActivity,
      addXP,
      unlockAchievement,
      updateStreak,
      loginAsGuest,
      logout
    }}>
      {children}
    </EduVentureContext.Provider>
  );
};

// Hook to consume context safely inside components
export const useEduVenture = () => {
  const context = useContext(EduVentureContext);
  if (context === undefined) {
    throw new Error('useEduVenture must be used within a EduVentureProvider');
  }
  return context;
};
