import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HappyBirthdayHeader from './components/HappyBirthdayHeader/HappyBirthdayHeader';
import Home from './components/Home/Home';
import BirthdayWishPage from './components/BirthdayWishPage/BirthdayWishPage';

const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <HappyBirthdayHeader />
        <Route exact path="/happy-birthday/:person" component={BirthdayWishPage}></Route>
        <Route path="/" component={Home}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;