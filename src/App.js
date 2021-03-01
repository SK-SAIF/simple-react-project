
import { useState } from 'react';
import './App.css';
import Players from './Components/Players/Players';
import fakeData from '../src/Fakedata/fakedata.json';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart';
import Budget from './Components/Budget/Budget';

function App() {
  const [addPlayer,setAddPlayer]=useState([]);
  const buttonHandler=(listedPlayer)=>{
    const newPlayer= [...addPlayer,listedPlayer];
    setAddPlayer(newPlayer);
  };
  return (
    <div className="App">
      
      <div className="players-container">
        <Players playersInfo={fakeData} eventHandler={buttonHandler}></Players>
        
      </div>
      <div className="added-player">
        <Cart added={addPlayer}></Cart>
      </div>
      <div className="budget">
        <Budget total={addPlayer}></Budget>
      </div>
    </div>
  );
}

export default App;
