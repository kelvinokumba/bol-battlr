import React from 'react';
import Bot from './Bot'; // Import the Bot component
import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom to handle nested routes

function YourBotArmy({ botArmy, releaseBotFromArmy, dischargeBotForever }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {/* Map over the 'botArmy' array to render individual Bot components */}
        {botArmy.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            releaseBotFromArmy={releaseBotFromArmy}
            dischargeBotForever={dischargeBotForever}
          />
        ))}
      </div>

      {/* Render the nested route's content using Outlet */}
      <Outlet /> 
    </div>
  );
}

export default YourBotArmy;
