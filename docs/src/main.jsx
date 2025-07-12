import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './assets/reset.css';
import './assets/variables.css';
import './assets/globals.css';

import './assets/header.css';
import './assets/banner.css';
import './assets/mainFilters.css';
import './assets/mainResults.css';
import './assets/projectCard.css';
import './assets/servicesAndPath.css';
import './assets/valuesAndMethods.css';
import './assets/footer.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
