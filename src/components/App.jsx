import React from 'react';
import SplashNav from './SplashNav';
import LinkBar from './LinkBar';
import SiteNav from './SiteNav';
import DriverPage from './DriverPage'
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={SplashNav} />
        <Route path='/driver' component={DriverPage} />
      </Switch>
      <LinkBar/>
      <SiteNav/>
    </div>
  );
}

export default App;
