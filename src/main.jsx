import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Font-Awesome
import 'font-awesome/css/font-awesome.min.css';

const basename = import.meta.env.PROD ? '/Pre-Entrega-React' : '';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
