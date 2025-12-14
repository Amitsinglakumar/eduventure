import React from 'react';

type Event = {
  id: string;
  title: string;
  date: string; // ISO string
  description?: string;
};

type CalendarProps = {
  events: Event[];
};

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  return (
    <section aria-label="Calendar and scheduling" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 select-none">Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-600 text-center">No upcoming events.</p>
      ) : (
        <ul className="space-y-4">
          {events.map(({ id, title, date, description }) => (
            <li key={id} className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
              <time dateTime={date} className="text-sm text-gray-500 block">
                {new Date(date).toLocaleString()}
              </time>
              {description && <p className="text-gray-600 mt-1">{description}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Calendar;
