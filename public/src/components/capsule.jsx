import React from 'react';

const Spaceport = function() {
  return(
    <>
  <section id='home-section' className='crew-section tech-section'>
            <h3><span>03</span>SPACE LAUNCH 101</h3>
      <h5 id='crew-title'>
              THE TERMINOLOGY...
            </h5>
            <h1 id='crew-name'>SPACEPORT</h1>
            <p id='crew-description'>
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
            by analogy to the seaport for ships or airport for aircraft. Based in the
            famous Cape Canaveral, our spaceport is ideally situated to take advantage
            of the Earth’s rotation for launch.
            </p>
          </section>
          <div className='img-container'>
          <img className='crew-img' src='./assets/technology/image-spaceport-portrait.jpg' width='515px' height='527px'></img>
          <hr id='hr-crew'></hr>
          </div>
    </>
  )
}

export default Spaceport;