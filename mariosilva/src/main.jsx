import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

{/*}
  If you’re deploying to GitHub Pages
  <HashRouter></HashRouter>
{*/}