import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const isGitHubPages = import.meta.env.GITHUB_PAGES === 'true';
const base = isGitHubPages ? '/reactjs-conference-ticket-generator' : '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router
      basename={base}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </Router>
  </StrictMode>
);
