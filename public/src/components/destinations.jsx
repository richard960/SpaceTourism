import React, {useState, useEffect} from 'react';

const Destinations = () => {
  const [isToggle, setToggle] = useState(false);

  const toggle = function() {
    setToggle(!isToggle);
  }

  useEffect(() => {
    document.body.id = 'destination'
  }, [])

  return (
    <div className='main'>
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
          <hr></hr>
          <div id='nav-menu' className={isToggle ? 'open' : 'close'} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav id='nav-container' className={isToggle ? 'slideIn' : 'slideOut'}>
          <svg id='close' onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
            <a className='transition'><span>00</span> Home</a>
            <a className='directory'><span>01</span> Destination</a>
            <a className='transition'><span>02</span> Crew</a>
            <a className='transition'><span>03</span> Technology</a>
          </nav>
        </header>
        <div className='home-flex'>
           <div>
             <h3>01 PICK YOUR DESTINATION</h3>
             <img src='./assets/destination/image-moon.png'></img>
           </div>
          <section id='planet-container'>
            <div id='planets'>
              <span className='planet'>MOON</span>
              <span className='planet'>MARS</span>
              <span className='planet'>EUROPA</span>
              <span className='planet'>TITAN</span>
            </div>
            <h1 id='planet-title'>MOON</h1>
            <p id='planet-description'>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help
            regain perspective and come back refreshed. While you’re there, take in some history
            by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
          <hr id='hr-planet'></hr>
          <div id='planet-meta'>
            <span>AVG. DISTANCE <br></br> 384,400 KM</span>
            <span>EST. TRAVEL TIME <br></br> 3 DAYS</span>
          </div>
          </section>
        </div>
    </div>
  )
}

export default Destinations;