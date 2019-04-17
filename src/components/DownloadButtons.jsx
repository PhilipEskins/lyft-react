import React from 'react';

function DownloadButtons() {
  return(
    <div className="flexStyle">
      <style jsx>{`
          button {
            background-color: black;
            width: 12vw;
            height: 6vh;
            border-radius: 10px;
            color: white;
            font-size: 2vw;
            margin: 5px;
          }
          .flexStyle {
            display: flex;
            flex-direction: column;
          }
          p {
            text-transform: uppercase;
            font-family: Sans-Serif;
            font-size: 2vw;
          }
            `}</style>
          <p>Download</p>
      <div>
        <button>Download</button>
        <button>Download</button>
      </div>
      <div>
        <button>Download</button>
        <button>Download</button>
      </div>
    </div>
  );
}

export default DownloadButtons;
