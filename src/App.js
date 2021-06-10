

import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import NavbarInter from './components/NavbarInter';
import Divisiones from './components/Divisiones';
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/gitPagueReac/" render={() =>{
        return <div> 
          <Navbar/>
          <Divisiones/>
        </div>
      }}>
        </Route>

        <Route exact path="/gitPagueReac/estructura" component={NavbarInter}/>
      </Router>
    </div>
  );
}



export default App;
