import React from 'react';
import Header from './Header';
import Dashboard from '../Dashboard/Dashboard';
import Subjects from '../Subjects/Subjects';
import Physical from '../Physical/Physical';
import Moral from '../Moral/Moral';
import Progress from '../Progress/Progress';
import CoursePlayer from '../Course/CoursePlayer';
import { useEduVenture } from '../../context/EduVentureContext';

const Layout: React.FC = () => {
  // EduVenture context se currentSection state le rahe hain
  const { state, setCurrentSection } = useEduVenture();

  // Current selected section ke hisaab se correct component render karne ka function
  const renderCurrentSection = () => {
    switch (state.currentSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'subjects':
        return <Subjects />;
      case 'physical':
        return <Physical />;
      case 'moral':
        return <Moral />;
      case 'progress':
        return <Progress />;
      case 'course':
        return <CoursePlayer subjectId="Math" lessonId="101" onBack={() => setCurrentSection('dashboard')} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header component har page par dikhai dega */}
      <Header />

      {/* Main content area jahan current section render hota hai */}
      <main className="container mx-auto px-4 py-8">
        <div className="animate-slide-in-bottom">
          {renderCurrentSection()}
        </div>
      </main>
    </div>
  );
};

export default Layout;
