import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Router from './Router';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
      />
      <Router />
    </>
  );
}

export default App;
