import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import contextProvider from './useContext/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <contextProvider>
   <App />
   </contextProvider>
   
  </React.StrictMode>,
)
