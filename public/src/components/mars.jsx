import React from 'react';

function Mars() {
  return(
  <>
    <h1 id='planet-title'>MARS</h1>
    <p id='planet-description'>
    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
    the tallest planetary mountain in our solar system. It’s two and a half times
    the size of Everest!
    </p>
    <hr id='hr-planet'></hr>
    <div id='planet-meta'>
    <h3 className='planetDistance'>AVG. DISTANCE <br></br> <span>225 MIL. KM</span></h3>
    <h3 className='planetTravel'>EST. TRAVEL TIME <br></br> <span>9 MONTHS</span></h3>
    </div>
  </>
  )
}

export default Mars;