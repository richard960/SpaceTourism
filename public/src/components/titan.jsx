import React from 'react';

function Titan() {
  return(
  <>
    <h1 id='planet-title'>TITAN</h1>
    <p id='planet-description'>
    The only moon known to have a dense atmosphere other than Earth, Titan
    is a home away from home (just a few hundred degrees colder!). As a
    bonus, you get striking views of the Rings of Saturn.
    </p>
    <hr id='hr-planet'></hr>
    <div id='planet-meta'>
    <h3 className='planetDistance'>AVG. DISTANCE <br></br> <span>1.6 BIL. KM</span></h3>
    <h3 className='planetTravel'>EST. TRAVEL TIME <br></br> <span>7 YEARS</span></h3>
    </div>
  </>
  )
}

export default Titan;