// BotCollection.js
import React from 'react';
import Bot from './Bot';
import { Outlet } from 'react-router-dom';

function BotCollection({ bots, addBotToArmy }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <Bot key={bot.id} bot={bot} addBotToArmy={addBotToArmy} />
        ))}
      </div>

      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
}

export default BotCollection;
