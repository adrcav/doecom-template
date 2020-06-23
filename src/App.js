import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Router from './Router';
import { Auth, AuthContext } from './services/auth';

const auth = new Auth();

function App() {
  return (
    <AuthContext.Provider value={auth}>
      <ToastContainer
        position="top-center"
      />
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
