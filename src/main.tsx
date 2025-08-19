import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cadastro from './pages/cadastro/index.tsx'
import Checkout from './pages/checkout/index.tsx'
import './styles/global.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Checkout />
  </StrictMode>,
)
