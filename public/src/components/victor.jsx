import React from 'react';

const Victor = function({setCrew}) {
  return(
    <>
    <section id='home-section' className='crew-section'>
            <h3><span>02</span>MEET YOUR CREW</h3>
      <h5 id='crew-title'>
              PILOT
            </h5>
            <h1 id='crew-name'>VICTOR GLOVER</h1>
            <p id='crew-description'>
            Pilot on the first operational flight of the SpaceX Crew Dragon to the
            International Space Station. Glover is a commander in the U.S. Navy where
            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
            station systems flight engineer.
            </p>
            <div className='circle-nav'>
            <span className='circle' id='c0' onClick={setCrew}></span>
            <span className='circle' id='c1' onClick={setCrew}></span>
            <span className='circle fill'></span>
            <span className='circle' id='c3' onClick={setCrew}></span>
            </div>
          </section>
          <img className='crew-img' src='./assets/crew/image-victor-glover.png' width='568.07px' height='712px'></img>
    </>
  )
}

export default Victor