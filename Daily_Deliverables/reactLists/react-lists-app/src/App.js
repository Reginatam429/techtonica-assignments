import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
  const fruits = ['apples','oranges','pears','bananas'];
  const fruitItems = fruits.map(
    (fruits, i) => (
      <li key={i} onClick={() => console.log(fruits)}>
        {fruits}
      </li>
      )
    );

  return (
    <div className="App">
      <h1 className="list-head">Lists</h1>
      <ul>{fruitItems}</ul>
      <Counter initialCount={fruitItems.length} />
    </div>
  );
}

export default App;

