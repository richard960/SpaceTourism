import React from 'react';

function Moon() {
  return(
  <>
    <h1 id='planet-title'>MOON</h1>
    <p id='planet-description'>
    See our planet as you’ve never seen it before. A perfect relaxing trip away to help
    regain perspective and come back refreshed. While you’re there, take in some history
    by visiting the Luna 2 and Apollo 11 landing sites.
    </p>
    <hr id='hr-planet'></hr>
    <div id='planet-meta'>
    <h3 className='planetDistance'>AVG. DISTANCE <br></br> <span>384,400 KM</span></h3>
    <h3 className='planetTravel'>EST. TRAVEL TIME <br></br> <span>3 DAYS</span></h3>
    </div>
  </>
  )
}

export default Moon;