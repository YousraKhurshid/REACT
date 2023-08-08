import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';

export const GlobalContext = createContext("Initiak value")
const contextData = {
     username : " Yousra Khurshid"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContext.Provider value={{contextData}}>
    <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  </GlobalContext.Provider>
)

