import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notification  from '../../../task_1/dashboard/src/Notifications'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Notification />
    <App />
  </React.StrictMode>
);
