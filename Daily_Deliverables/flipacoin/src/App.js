import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
  const coin = ['heads','tails'];
  const coinItems = coin.map(
    (coin, i) => (
      <li key={i} onClick={() => console.log(coin)}>
        {coin}
      </li>
      )
    );

  return (
    <div className="App">
      <h1 className="list-head">Flip a Coin</h1>
      <Counter initialCount={coinItems.length} />
    </div>
  );
}

export default App;

