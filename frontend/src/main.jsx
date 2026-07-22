import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { EmotionProvider } from "./context/EmotionContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ThemeProvider>
    <EmotionProvider>
       <AuthProvider>
  <App />
    </AuthProvider>
  </EmotionProvider>
  </ThemeProvider>
</BrowserRouter>
  </StrictMode>,
)
