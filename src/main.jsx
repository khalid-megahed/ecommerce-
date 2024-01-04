import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from "./Context/ReportWebVitals.js"
import ShopContextProvider from './Context/ShopContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </ShopContextProvider>
)



reportWebVitals()
