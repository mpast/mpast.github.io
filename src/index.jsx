import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);

// Clear registrations left by an earlier version of the site.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistration().then(registration => {
    if (registration) return registration.unregister();
  }).catch(console.error);
}
