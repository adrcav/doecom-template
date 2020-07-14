import React from 'react';

import './App.css';

import Router from './Router';
import { Auth, AuthContext } from './services/auth';

const auth = new Auth();

function App() {
  return (
    <AuthContext.Provider value={auth}>
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
