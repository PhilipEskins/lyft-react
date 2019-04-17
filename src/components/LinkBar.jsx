import React from 'react';

function LinkBar() {
  const linkStyle = {
    color: 'black',
    fontWeight: 'bold'
  }
  return(
    <div className="flexStyle">
      <style jsx>{`
          .barStyle {
            border: 3px solid black;
            height: 6vh;
            width: 15vw;
            border-radius: 50px;
            font-size: 2vh;
            box-shadow: 0px 5px lightgrey;
          }
          .barStyle:hover {
            border: none;
            background-color: blue;
            color: white;
          }
          .flexStyle {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 80vw;
            margin: auto;
          }
          `}</style>
      <button className="barStyle" type='button'>Apply to drive</button>
      <a style={linkStyle} href="#">Why Lyft: Drivers</a>
      <a style={linkStyle} href="#">Why Lyft: Cities</a>

    </div>
  );
}

export default LinkBar;
