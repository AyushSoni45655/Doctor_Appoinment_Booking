import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AContextProvider } from './contexts/AdminContext.jsx'
import {Toaster} from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AContextProvider>
      <App />
      <Toaster position='top-right' reverseOrder={false}/>
    </AContextProvider>
    
  </StrictMode>,
)
