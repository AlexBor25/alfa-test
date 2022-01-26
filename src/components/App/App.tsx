import React from 'react';
import CardList from '../CardList/CardList';
import Filters from '../Filters/Filters';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>Немного инфы о котиках :)</h1>
      <Filters />
      <CardList />
    </div>
  );
};

export default App;
