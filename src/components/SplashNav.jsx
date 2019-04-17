import React from 'react';
import lyft from '../assets/img/lyft.jpg';

function SplashNav() {

  const gridStyle = {
    display: 'grid',
    grid: 'repeat(2, 46vh) / repeat(3, 1fr)'
  };
  const imgStyle = {
    gridRow: '1 / -1',
    gridColumn: '1 / -1',
    width: '100%',
    height: '100%'
  };
  const lyftLink = {
    gridRow: '1',
    gridColumn: '1'
  };
  const otherLinks= {
    gridRow: '1',
    gridColumn: '3',
    textAlign: 'center'
  };
  const videoLink = {
    gridRow: '2',
    gridColumn: '2',
    textAlign: 'center'
  };

  return(
    <div style={gridStyle}>
      <style jsx>{`
          .linkStyle {
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1vw;
            margin-left: 2vw;
            font-family: Sans-Serif;
          }
      `}</style>
      <img src={lyft} style={imgStyle}/>
      <div style={lyftLink}>
        <a className="linkStyle" href="#">lyft</a>
      </div>
      <div style={otherLinks}>
        <a href="#" className="linkStyle">driver</a>
        <a href="#" className="linkStyle">rider</a>
        <a href="#" className="linkStyle">log in</a>
      </div>
      <div style={videoLink}>
        <a href="#" className="linkStyle">watch our story</a>
      </div>
    </div>
  );
}

export default SplashNav;
