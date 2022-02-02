import React from 'react';

const Anousheh = function({setCrew}) {
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
            <span className='circle' id='c0' onClick={setCrew}></span>
            <span className='circle' id='c1' onClick={setCrew}></span>
            <span className='circle' id='c2' onClick={setCrew}></span>
            <span className='circle fill'></span>
            </div>
          </section>
          <div className='img-container'>
          <img className='crew-img' src='./assets/crew/image-anousheh-ansari.png' width='615.57px' height='607px'></img>
          <hr id='hr-crew'></hr>
          </div>
    </>
  )
}

export default Anousheh