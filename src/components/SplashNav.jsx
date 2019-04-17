import React from 'react';
import lyft from '../assets/img/lyft.jpg';

function SplashNav() {

  const gridStyle = {
    display: 'grid',
    grid: 'repeat(2, 46vh) / repeat(3, 1fr)'
  }
  const imgStyle = {
    gridRow: '1 / -1',
    gridColumn: '1 / -1',
    width: '100%',
    height: '100%'
  }
  const lyftLink = {
    gridRow: '1',
    gridColumn: '1'
  }
  const otherLinks= {
    gridRow: '1',
    gridColumn: '3'
  }
  const videoLink = {
    gridRow: '2',
    gridColumn: '2'
  }
  return(
    <div style={gridStyle}>
      <img src={lyft} style={imgStyle}/>
      <div style={lyftLink}>
        <a href="#">lyft</a>
      </div>
      <div style={otherLinks}>
        <a href="#">driver</a>
        <a href="#">rider</a>
        <a href="#">log in</a>
      </div>
      <div style={videoLink}>
        <a href="#">watch our story</a>
      </div>
    </div>
  );
}

export default SplashNav;
