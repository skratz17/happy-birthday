import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HappyBirthdayHeader from './components/HappyBirthdayHeader/HappyBirthdayHeader';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div id="app">
      <HappyBirthdayHeader />
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;