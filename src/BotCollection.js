import React from 'react';
import Bot from './Bot'; // Import the Bot component
import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom to handle nested routes

function BotCollection({ bots, addBotToArmy }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {/* Map over the 'bots' array to render individual Bot components */}
        {bots.map((bot) => (
          <Bot key={bot.id} bot={bot} addBotToArmy={addBotToArmy} />
        ))}
      </div>

      {/* Render the nested route's content using Outlet */}
      <Outlet /> 
    </div>
  );
}

export default BotCollection;
