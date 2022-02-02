import React from 'react';

const Douglas = function({setCrew}) {
  return(
    <>
    <section id='home-section' className='crew-section'>
            <h3><span>02</span>MEET YOUR CREW</h3>
      <h5 id='crew-title'>
              COMMANDER
            </h5>
            <h1 id='crew-name'>DOUGLAS HURLEY</h1>
            <p id='crew-description'>
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
              and former NASA astronaut. He launched into space for the third time as
              commander of Crew Dragon Demo-2.
            </p>
            <div className='circle-nav'>
            <span className='circle fill'></span>
            <span className='circle' id='c1' onClick={setCrew}></span>
            <span className='circle' id='c2' onClick={setCrew}></span>
            <span className='circle' id='c3' onClick={setCrew}></span>
            </div>
          </section>
          <div className='img-container'>
          <img className='crew-img' src='./assets/crew/image-douglas-hurley.png' width='568.07px' height='712px'></img>
          </div>
    </>
  )
}

export default Douglas