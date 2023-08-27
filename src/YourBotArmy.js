// YourBotArmy.js
import React from 'react';
import Bot from './Bot';
import { Outlet } from 'react-router-dom';

function YourBotArmy({ botArmy, releaseBotFromArmy, dischargeBotForever }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {botArmy.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            releaseBotFromArmy={releaseBotFromArmy}
            dischargeBotForever={dischargeBotForever}
          />
        ))}
      </div>

      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
}

export default YourBotArmy;
