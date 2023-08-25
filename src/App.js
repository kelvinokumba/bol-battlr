import React, {useEffect, useState} from 'react';
import BotCollection from './BotCollection';


import './App.css';

function App() {

  const [bots, setBots] = useState([]);


  useEffect(() => {
    //Fetch data from local server
    fetch('http://localhost:8080/bots')
    .then(response => response.json())
    .then(data => {
      setBots(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots}  />
     
    </div>
  );
}

export default App;
