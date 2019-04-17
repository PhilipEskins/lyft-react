import React from 'react';

function LinkBar() {
  return(
    <div>
      <style jsx>{`
          .barStyle {
            border: 3px solid black;
            height: 6vh;
            width: 20vw;
            border-radius: 50px;
            font-size: 2vh;
            box-shadow: 0px 5px lightgrey;
          }
          .barStyle:hover {
            border: none;
            background-color: blue;
            color: white;
          }
          `}</style>
      <button className="barStyle" type='button'>Apply to drive</button>

    </div>
  );
}

export default LinkBar;
