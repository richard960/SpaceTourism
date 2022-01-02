import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
      <div id='main'>

        <header>
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