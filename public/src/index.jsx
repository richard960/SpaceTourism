import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Destinations from './components/destinations.jsx';
import Crews from './components/crews.jsx';
import Technologies from './components/technologies.jsx';

const App = () => {
  const [page, setPage] = useState('00');

  const currentPage = function(e) {
    const el = e.target;
    if(el.id === 'home-explore') {
      setPage('01');
      return;
    }
    setPage(el.id)
  }

  return(
    <div id='top'>
      {page === '00'
        ? <Home setPage={currentPage}/> :
          page === '01'
           ? <Destinations setPage={currentPage}/> :
            page === '02'
              ? <Crews setPage={currentPage}/> :
                page === '03'
                  ? <Technologies setPage={currentPage}/> : <Home setPage={currentPage}/>}
      {/* <Destinations/> */}
      {/* <Home/> */}
      {/* <Crews/> */}
      {/* <Technologies/> */}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));