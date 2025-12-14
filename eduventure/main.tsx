import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { EduVentureProvider } from './context/EduVentureContext';
import './index.css';

/**
 * Entry point of React application.
 * - Imports global styles including Tailwind and custom CSS from index.css.
 * - Uses React 18's createRoot API to mount App component inside the root div.
 * - Wraps App in StrictMode for highlighting potential problems.
 */

// Find root container element
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container #root not found');
}

// Create React root and render the App component inside StrictMode
const root = createRoot(container);

root.render(
  <StrictMode>
    <EduVentureProvider>
      <App />
    </EduVentureProvider>
  </StrictMode>
);
