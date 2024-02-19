// React builtin components imports
import React from 'react';
import './App.css'

// Third-party components imports
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

// Custom component imports
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter basename="/">
      <ToastContainer
        newestOnTop
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
