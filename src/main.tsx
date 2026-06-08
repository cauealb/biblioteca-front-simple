import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPages from './modules/Login/pages/LoginPages.tsx'
import LadingPage from './modules/Landing Page/pages/LadingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LadingPage />
  </StrictMode>,
)
