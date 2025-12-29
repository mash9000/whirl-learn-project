import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WhirlMainComponent} from "./components/WhirlMainComponent.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WhirlMainComponent />
  </StrictMode>,
)
