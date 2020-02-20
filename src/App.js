import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>WOB</h1>
      <div>
        <span>Item 1</span>
        <select>
          <option>kg</option>
          <option>g</option>
        </select>
        <input type="number" placeholder="value" />
      </div>
      <div>
        <span>Item 2</span>
        <select>
          <option>kg</option>
          <option>g</option>
        </select>
        <input type="number" placeholder="value" />
      </div>
      <div>
        <button>Compare</button>
      </div>
    </div>
  );
}

export default App;
