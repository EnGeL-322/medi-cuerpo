import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RengApp } from './App'
import './styles/app.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RengApp />
  </StrictMode>
)
