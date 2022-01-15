import React, {useEffect, useState} from 'react';


const Home = () => {
  const [isToggle, setToggle] = useState(false);

  const toggle = function() {
    setToggle(!isToggle);
  }

  useEffect(() => {
    let elem = document.querySelector('#home-section');
    let rect = elem.getBoundingClientRect();

    if(rect.top - window.innerHeight <= 0) {
      document.querySelector('.home-flex section').classList.add('fade-in');
    }
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > rect.top) {
        document.querySelector('.home-flex section').classList.add('fade-in');
      }
    })
    document.body.id = 'home';
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
            <a className='directory'><span>00</span> Home</a>
            <a className='transition'><span>01</span> Destination</a>
            <a className='transition'><span>02</span> Crew</a>
            <a className='transition'><span>03</span> Technology</a>
          </nav>
        </header>
        <div className='home-flex'>
          <section id='home-section'>
            <h5>
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 id='home-title'>SPACE</h1>
            <p id='home-description'>
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </section>
            <button id='home-explore'>EXPLORE</button>
        </div>
      </div>)
}

export default Home;