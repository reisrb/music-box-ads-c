import React from 'react';
import Router from './router';
import Menu from "./components/Menu";

import './assets/css/style.css';
import './assets/css/reset.css';

function App() {
  return (
    <>
      <Menu />
      <Router />
    </>
  );
}

export default App;
