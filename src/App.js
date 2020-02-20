import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemRow from './components/ItemRow'

function App() {
  return (
    <div className="App">
      <h1>WOB</h1>
        <ItemRow index = {1}/>
        <ItemRow index = {2}/>
      <div>
        <button>Compare</button>
      </div>
    </div>
  );
}

export default App;
