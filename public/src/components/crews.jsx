import React, {useEffect, useState} from 'react';
import Douglas from './dogulas.jsx';
import Anousheh from './anousheh.jsx';
import Victor from './victor.jsx';
import Mark from './mark.jsx';
const Crews = () => {
  const [isToggle, setToggle] = useState(false);

  const toggle = function() {
    setToggle(!isToggle);
  }

  useEffect(() => {
    let elem = document.querySelector('#home-section');
    let rect = elem.getBoundingClientRect();

    if(rect.top - window.innerHeight <= 0) {
      document.querySelector('.flex section').classList.add('fade-in');
    }
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > rect.top) {
        document.querySelector('.flex section').classList.add('fade-in');
      }
    })
    document.body.id = 'crew';
  }, []);

    return(
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
          <svg id='close' onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
            <a className='directory'><span>00</span> HOME</a>
            <a className='transition'><span>01</span> DESTINATION</a>
            <a className='transition'><span>02</span> CREW</a>
            <a className='transition'><span>03</span> TECHNOLOGY</a>
          </nav>
        </header>
        <div className='flex' id='crew-flex'>
          {/* <section id='home-section' className='crew-section'>
            <h3><span>02</span>MEET YOUR CREW</h3>
          </section>
          <img src='./assets/crew/image-douglas-hurley.png' width='568.07px' height='712px'></img> */}
              {/* <Douglas/> */}
              {/* <Anousheh/> */}
              {/* <Victor/> */}
              <Mark/>
        </div>
      </div>)
}

export default Crews;