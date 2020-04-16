import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Confetti from 'react-confetti';

import HappyBirthdayHeader from './components/HappyBirthdayHeader/HappyBirthdayHeader';
import Home from './components/Home/Home';
import BirthdayWishPage from './components/BirthdayWishPage/BirthdayWishPage';

const App = () => {
  // clean up the confetti... otherwise width and height of window gets all wonky
  setTimeout(() => document.querySelector('canvas').style.display = 'none', 10000);

  return (
    <div id="app">
      <Confetti recycle={false} />
      <BrowserRouter>
        <HappyBirthdayHeader />
        <Route exact path="/:person" component={BirthdayWishPage}></Route>
        <Route exact path="/" component={Home}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;