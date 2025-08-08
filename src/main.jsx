import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TripProvider } from './context/TripContext.jsx' //import provider


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TripProvider> {/* wrap your app */}
      <App />
    </TripProvider>
  </StrictMode>,
)
