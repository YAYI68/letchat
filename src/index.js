import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UseStateContextProvider } from './contexts/UseStateContextProvider';
import { BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseStateContextProvider>
      <Router>
       <App />
      </Router>
    </UseStateContextProvider>
  </React.StrictMode>
);


