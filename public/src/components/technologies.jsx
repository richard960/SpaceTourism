import React, {useState, useEffect} from 'react';
import Vehicle from './vehicle.jsx';
import Spaceport from './spaceport.jsx';
import Capsule from './capsule.jsx';
const Technologies = ({setPage}) => {
  const [isToggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState('1');

  const toggle = function() {
    setToggle(!isToggle);
  }

  const page = function(e) {
    console.log(e.target.innerText)
    setCurrentPage(e.target.innerText);
  }

  useEffect(() => {
    document.body.id = 'technology';
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
          <a className='transition' id='00' onClick={setPage}><span id='00'>00</span> HOME</a>
            <a className='transition' id='01' onClick={setPage}><span id='01'>01</span> DESTINATION</a>
            <a className='transition' id='02'onClick={setPage}><span id='02'>02</span> CREW</a>
            <a className='directory' id='03'><span id='03'>03</span> TECHNOLOGY</a>
          </nav>
        </header>
        <div className='flex flex-tech' id='crew-flex'>
          <div id='tech-button'>
           <button className='current-button' onClick={page}>1</button>
           <button className='current-button' onClick={page}>2</button>
           <button className='current-button' onClick={page}>3</button>
          </div>
            {currentPage === '1'
              ? <Vehicle/> :
                currentPage === '2'
                ? <Spaceport/> :
                  currentPage === '3'
                  ? <Capsule/> : <Vehicle/>}
        </div>
      </div>)
}

export default Technologies;