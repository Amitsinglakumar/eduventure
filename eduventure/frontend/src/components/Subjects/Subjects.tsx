import React, { useState } from 'react';
import { useEduVenture } from '../../context/EduVentureContext';
import SubjectCard from './SubjectCard';
import SubjectModal from './SubjectModal';

const Subjects: React.FC = () => {
  // EduVenture context se subjects ki list le rahe hain
  const { state } = useEduVenture();
  // Selected subject id ka state jisse modal control hota hai
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Kisi subject card pe click hone par modal open karne ka handler
  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId);
  };

  // Modal ko close karne ka function
  const handleCloseModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto space-y-12">
      {/* Introduction header */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 select-none">📚 Learning Subjects</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Choose your favorite subject and embark on an exciting learning journey! 
          Each subject has multiple levels to master and earn amazing rewards.
        </p>
      </header>

      {/* Subject cards grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {state.subjects.map((subject, index) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onClick={() => handleSubjectClick(subject.id)}
            delay={index * 0.1} // Animation delay for staggered appearance
          />
        ))}
      </section>

      {/* Modal for selected subject's levels */}
      {selectedSubject && (
        <SubjectModal
          subjectId={selectedSubject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Subjects;
