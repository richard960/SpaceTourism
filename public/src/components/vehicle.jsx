import React from 'react';

const Vehicle = function() {
  return(
    <>
  <section id='home-section' className='crew-section tech-section'>
            <h3><span>03</span>SPACE LAUNCH 101</h3>
      <h5 id='tech-title'>
              THE TERMINOLOGY...
            </h5>
            <h1 id='tech-name'>LAUNCH VEHICLE</h1>
            <p id='tech-description'>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
            payload from Earth's surface to space, usually to Earth orbit or beyond. Our
            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
            it's quite an awe-inspiring sight on the launch pad!
            </p>
          </section>
          <div className='img-container tech-img'>
          <img className='crew-img' src='./assets/technology/image-launch-vehicle-portrait.jpg' width='445px' height='457px'></img>
          <hr id='hr-crew'></hr>
          </div>
    </>
  )
}

export default Vehicle;