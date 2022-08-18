import React from 'react';
import './App.css';
import { originals,action,love, comedy, horror } from './urls';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Orginals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={love} title='Love' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;
