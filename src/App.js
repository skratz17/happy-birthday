import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Confetti from 'react-confetti';

import HappyBirthdayHeader from './components/HappyBirthdayHeader/HappyBirthdayHeader';
import Home from './components/Home/Home';
import BirthdayWishPage from './components/BirthdayWishPage/BirthdayWishPage';

const App = () => {
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