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
          }
      `}</style>
    <div>
      <h2>Driver</h2>
        {driverLinks.map((link,index)=>
          <LinkList link={link}
                    key={index}/>
          )}
    </div>
    <div>
      <h2>Rider</h2>
        {riderLinks.map((link,index)=>
          <LinkList link={link}
                    key={index}/>
          )}
    </div>
    <div>
      <h2>Lyft</h2>
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
