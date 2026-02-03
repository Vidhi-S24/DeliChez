import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import { StoreContext } from './context/contextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
   {/* <BrowserRouter basename="/D-liChez"> for localhost */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
