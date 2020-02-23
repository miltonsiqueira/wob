import React from 'react';
import './App.css';
import ItemRow from './components/ItemRow'

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>WOB</h1>
          <ItemRow index = {1}/>
          <ItemRow index = {2}/>
        <div>
          <button>Compare</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
