// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Use BrowserRouter
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addBotToArmy = (bot) => {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const releaseBotFromArmy = (bot) => {
    const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(updatedArmy);
  };

  const dischargeBotForever = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        releaseBotFromArmy(bot);
      })
      .catch((error) => {
        console.error('Error discharging bot:', error);
      });
  };

  return (
    
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Bot Collection</Link>
            </li>
            <li>
              <Link to="/army">Your Bot Army</Link>
            </li>
          </ul>
        </nav>
        

        <Routes>
          <Route path="/" element={<BotCollection bots={bots} addBotToArmy={addBotToArmy} />} />
          <Route path="/army" element={<YourBotArmy botArmy={botArmy} releaseBotFromArmy={releaseBotFromArmy} dischargeBotForever={dischargeBotForever} />} />
          <Route
            path="/bot/:id" // Use the route parameter :id
            element={
              <BotSpecs
                botArmy={botArmy}
                addBotToArmy={addBotToArmy}
              />
            }
          />
        </Routes>
      </div>
    
  );
}

export default App;
