import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-markup-hw-08-react">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename="/goit-markup-hw-08-react"
