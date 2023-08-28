// Import React and necessary components and styles
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Use BrowserRouter
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import './App.css'; // Import your custom CSS styles

function App() {
  // Initialize state for bots and botArmy using useState
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  // Fetch bot data from the server when the component mounts using useEffect
  useEffect(() => {
    fetch('https://bot-battlr-back-end.onrender.com')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Define a function to add a bot to the botArmy state
  const addBotToArmy = (bot) => {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  // Define a function to release a bot from the botArmy state
  const releaseBotFromArmy = (bot) => {
    const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(updatedArmy);
  };

  // Define a function to discharge a bot forever by making a DELETE request to the server
  const dischargeBotForever = (bot) => {
    fetch(`https://bot-battlr-back-end.onrender.com/${bot.id}`, {
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
    // Use the Router component to enable routing in your app
    
      <div className="App">
        {/* Create navigation links */}
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

        {/* Define routes using Routes and Route components */}
        <Routes>
          <Route
            path="/"
            element={<BotCollection bots={bots} addBotToArmy={addBotToArmy} />} // Render BotCollection component for the root path
          />
          <Route
            path="/army"
            element={
              <YourBotArmy
                botArmy={botArmy}
                releaseBotFromArmy={releaseBotFromArmy}
                dischargeBotForever={dischargeBotForever}
              />
            } // Render YourBotArmy component for the "/army" path
          />
          <Route
            path="/bot/:id" // Use the route parameter :id to specify a dynamic route
            element={
              <BotSpecs
                botArmy={botArmy}
                addBotToArmy={addBotToArmy}
              />
            } // Render BotSpecs component with the specified bot's details
          />
        </Routes>
      </div>
    
  );
}

export default App;
