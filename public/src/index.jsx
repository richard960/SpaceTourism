import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  useEffect(() => {
    document.body.id = 'home'
  }, [])
    return(
      <div id='main'>
        <header>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
          <hr></hr>
          <nav>
            <a className='directory'><span>00</span> Home</a>
            <a className='transition'><span>01</span> Destination</a>
            <a className='transition'><span>02</span> Crew</a>
            <a className='transition'><span>03</span> Technology</a>
          </nav>
        </header>
  So, you want to travel to
  Space
  Let’s face it; if you want to go to space, you might as well genuinely go to
  outer space and not hover kind of on the edge of it. Well sit back, and relax
  because we’ll give you a truly out of this world experience!

  Explore
      </div>)
}

ReactDOM.render(<App/>, document.getElementById('app'));