import React from 'react';

const Mark = function({setCrew}) {
  return(
    <>
    <section id='home-section' className='crew-section'>
            <h3><span>02</span>MEET YOUR CREW</h3>
      <h5 id='crew-title'>
              MISSION SPECIALIST
            </h5>
            <h1 id='crew-name'>MARK SHUTTLEWORTH</h1>
            <p id='crew-description'>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
            the Linux-based Ubuntu operating system. Shuttleworth became the first South
            African to travel to space as a space tourist.
            </p>
            <div className='circle-nav'>
            <span className='circle' id='c0' onClick={setCrew}></span>
            <span className='circle fill'></span>
            <span className='circle' id='c2' onClick={setCrew}></span>
            <span className='circle' id='c3' onClick={setCrew}></span>
            </div>
          </section>
          <div className='img-container'>
          <img className='crew-img' src='./assets/crew/image-mark-shuttleworth.png' width='453.44px' height='654px'></img>
          <hr id='hr-crew'></hr>
          </div>
    </>
  )
}

export default Mark