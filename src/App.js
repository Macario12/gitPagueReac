

import { Menu } from 'semantic-ui-react';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Divisiones from './components/Divisiones';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Divisiones/>
    </div>
  );
}



export default App;
