import React from 'react';
import { Link } from 'react-router-dom';

function DriverPage() {
  return(
    <div>
      <h3>This is the Driver page</h3>
      <p><Link to='/'>Click here to return</Link></p>
    </div>
  );
}

export default DriverPage;
