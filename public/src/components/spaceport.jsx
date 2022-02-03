import React from 'react';

const Spaceport = function() {
  return(
    <>
  <section id='home-section' className='crew-section tech-section'>
            <h3><span>03</span>SPACE LAUNCH 101</h3>
      <h5 id='tech-title'>
              THE TERMINOLOGY...
            </h5>
            <h1 id='tech-name'>SPACE CAPSULE</h1>
            <p id='tech-description'>
            A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
            capsule to reenter the Earth's atmosphere without wings. Our capsule is where
            you'll spend your time during the flight. It includes a space gym, cinema,
            and plenty of other activities to keep you entertained.
            </p>
          </section>
          <div className='img-container tech-img'>
          <img className='crew-img' src='./assets/technology/image-space-capsule-portrait.jpg' width='445px' height='457px'></img>
          <hr id='hr-crew'></hr>
          </div>
    </>
  )
}

export default Spaceport;