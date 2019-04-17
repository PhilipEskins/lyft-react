import React from 'react';
import LinkList from './LinkList';
import DownloadButtons from './DownloadButtons';

const driverLinks = [
  'placeholder',
  'another',
  'go here now',
  'placeholder',
  'another',
  'go here now',
  'placeholder',
  'another',
  'go here now',
]

const riderLinks = [
  'placeholder',
  'another',
  'go here now',
  'placeholder',
  'another',
  'go here now',
  'placeholder',
  'another',
  'go here now',
]

const lyftLinks = [
  'placeholder',
  'another',
  'go here now',
  'placeholder',
  'another',
  'go here now',
  'placeholder',
  'another',
  'go here now',
]

function SiteNav() {
  return(
    <div className="flexContainer">
      <style jsx> {`
          .flexContainer {
            display: flex;
            justify-content: space-around;
            background: linear-gradient(to bottom, rgba(221,221,221,0.5) 0%, rgba(221,221,221,0.1) 5%);
          }
          p {
            text-transform: uppercase;
            font-family: Sans-Serif;
            font-size: 2vw;
          }
      `}</style>
    <div>
      <p>Driver</p>
        {driverLinks.map((link,index)=>
          <LinkList link={link}
                    key={index}/>
          )}
    </div>
    <div>
      <p>Rider</p>
        {riderLinks.map((link,index)=>
          <LinkList link={link}
                    key={index}/>
          )}
    </div>
    <div>
      <p>Lyft</p>
        {lyftLinks.map((link,index)=>
          <LinkList link={link}
                    key={index}/>
          )}
    </div>
      <DownloadButtons/>


    </div>
  );
}

export default SiteNav;
