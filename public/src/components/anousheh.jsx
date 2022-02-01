import React from 'react';

const Anousheh = function() {
  return(
    <>
    <section id='home-section' className='crew-section'>
            <h3><span>02</span>MEET YOUR CREW</h3>
      <h5 id='crew-title'>
              FLIGHT ENGINEER
            </h5>
            <h1 id='crew-name'>ANOUSHEH ANSARI</h1>
            <p id='crew-description'>
            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
            Ansari was the fourth self-funded space tourist, the first self-funded woman to
            fly to the ISS, and the first Iranian in space.
            </p>
            <div className='circle-nav'>
            <span className='circle'></span>
            <span className='circle fill'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            </div>
          </section>
          <img className='crew-img' src='./assets/crew/image-anousheh-ansari.png' width='568.07px' height='712px'></img>
    </>
  )
}

export default Anousheh