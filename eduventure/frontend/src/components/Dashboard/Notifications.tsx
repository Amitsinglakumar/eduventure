import React from 'react';

type Notification = {
  id: string;
  title: string;
  message: string;
  date: string; // ISO string or formatted date string
  read: boolean;
};

type NotificationsProps = {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
};

const Notifications: React.FC<NotificationsProps> = ({ notifications, onMarkAsRead }) => {
  return (
    <section aria-label="Notifications and announcements" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 select-none">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-600 text-center">You're all caught up!</p>
      ) : (
        <ul className="space-y-4 max-h-80 overflow-y-auto">
          {notifications.map(({ id, title, message, date, read }) => (
            <li
              key={id}
              className={`p-4 rounded-xl border transition-colors duration-200 ${
                read ? 'bg-gray-50 border-gray-200' : 'bg-indigo-50 border-indigo-300 shadow-md'
              }`}
              tabIndex={0}
              role="article"
              aria-live={read ? undefined : 'polite'}
            >
              <header className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <button
                  onClick={() => onMarkAsRead(id)}
                  aria-label={`Mark notification '${title}' as read`}
                  className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
                >
                  &#10003;
                </button>
              </header>
              <p className="text-gray-700 text-sm mb-1">{message}</p>
              <time dateTime={date} className="text-xs text-gray-500">
                {new Date(date).toLocaleString()}
              </time>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Notifications;
