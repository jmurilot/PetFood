import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cadastro from './pages/cadastro/index.tsx'
import './styles/global.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
