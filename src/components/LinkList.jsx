import React from 'react';





function LinkList(props) {

  return(
    <div>
      <style jsx>{`
          div {
            text-transform: capitalize;
            font-family: Sans-Serif;
            font-size: 1vw;
          }
            `}</style>
      {props.link}

    </div>
  );
}

export default LinkList;
