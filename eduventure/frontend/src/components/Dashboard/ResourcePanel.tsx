import React from 'react';

type Resource = {
  id: string;
  title: string;
  type: 'video' | 'animation' | 'tutorial' | 'article';
  url: string;
};

type ResourcePanelProps = {
  resources: Resource[];
};

const ResourcePanel: React.FC<ResourcePanelProps> = ({ resources }) => {
  return (
    <section aria-label="Learning resources panel" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 select-none">Learning Resources</h2>
      <ul className="space-y-4">
        {resources.map(({ id, title, type, url }) => (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-indigo-50 rounded-xl underline text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
              aria-label={`Open resource: ${title} (${type})`}
            >
              <strong className="capitalize">{type}</strong>: {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResourcePanel;
