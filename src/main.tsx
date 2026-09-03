import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { injetarDadosEstruturados } from './seo/dadosEstruturados'
import './styles/index.css'

injetarDadosEstruturados()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
