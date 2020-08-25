import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './pages/Form';
import GiftCard from './pages/GiftCard';
import WrongAnswer from './pages/WrongAnswer';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Form} />
      <Route path="/gift-card" component={GiftCard} />
      <Route path="/wrong-answer" component={WrongAnswer} />
    </BrowserRouter>
  );
};

export default Routes;
