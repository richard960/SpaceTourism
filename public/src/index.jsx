import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Destinations from './components/destinations.jsx';
import Crews from './components/crews.jsx';
const App = () => {
  return(
    <div id='top'>
      {/* <Destinations/> */}
      {/* <Home/> */}
      <Crews/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));