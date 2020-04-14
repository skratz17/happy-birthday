import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HappyBirthdayHeader from './components/HappyBirthdayHeader/HappyBirthdayHeader';
import Home from './components/Home/Home';
import linksConfig from './config/linksConfig';

const App = () => {
  return (
    <div id="app">
      <HappyBirthdayHeader />
      <BrowserRouter>
        <Route exact path="/" render={props => <Home links={linksConfig} {...props} />}></Route>
        <Route exact path="/test" component={HappyBirthdayHeader}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;