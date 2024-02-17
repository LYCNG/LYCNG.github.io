import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ExercisesProvider } from './contexts/exercisesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ExercisesProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ExercisesProvider>
  </BrowserRouter>
 ,
)
