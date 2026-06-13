import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Router from './Routes/routes.jsx'

import App from './components/Main'
import Headers from './components/Header'
import GlobalStyles from './GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    
  </StrictMode>,
)
