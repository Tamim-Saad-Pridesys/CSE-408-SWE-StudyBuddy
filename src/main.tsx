import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/Router'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)