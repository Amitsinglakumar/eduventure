import React, { useState } from 'react';
import StoriesLibrary from './StoriesLibrary';
import ValuesCorner from './ValuesCorner';
import ShlokaOfTheDay from './ShlokaOfTheDay';
import StoryModal from './StoryModal';

const Moral: React.FC = () => {
  // Selected story modal open karne ke liye state
  const [selectedStory, setSelectedStory] = useState<any>(null);

  // Additional sections can be added here for deeper engagement, e.g.:
  // MotivationalQuotes, MoralQuizzes, ReflectiveJournals, GuidedMeditations

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto space-y-12">
      {/* Introduction Header */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          🕉️ Values & Wisdom Hub
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Discover timeless wisdom through stories, motivational teachings, and daily inspirations. 
          Build character, learn virtues, and apply ancient values for a fulfilled life.
        </p>
      </header>

      {/* Main Grid Area */}
      <section className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          {/* Stories Library component with story selection */}
          <StoriesLibrary onSelectStory={setSelectedStory} />
        </div>

        {/* ValuesCorner with core teachings and virtues */}
        <ValuesCorner />

        {/* ShlokaOfTheDay providing daily inspirational verse */}
        <ShlokaOfTheDay />

        {/* Placeholder for future important moral related content */}
        <section className="bg-indigo-50 rounded-xl p-6 shadow-inner text-center text-indigo-700 font-semibold">
          {/* Example content - add motivational quotes or exercise here */}
          📜 Stay tuned for more valuable lessons and activities!
        </section>
      </section>

      {/* Story modal popup for detailed reading */}
      {selectedStory && (
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </div>
  );
};

export default Moral;
