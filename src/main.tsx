import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './contexts/TodoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Körbeöleljük a providerrel a szülőkomponenst (azt, amelyikben fel akarjuk használni) */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
)
