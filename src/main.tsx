import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import LoginPages from './pages/LoginPages.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPages />
  </StrictMode>,
)
