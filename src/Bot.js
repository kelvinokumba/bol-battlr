// Bot.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Bot({ bot, addBotToArmy, releaseBotFromArmy, dischargeBotForever }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    // Navigate to the bot's details page
    navigate(`/bot/${bot.id}`);
  };

  return (
    <div className="bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => addBotToArmy(bot)}>Add to Army</button>
      <button onClick={() => releaseBotFromArmy(bot)}>Release</button>
      <button onClick={() => dischargeBotForever(bot)}>Discharge Forever</button>
      <Link to={`/bot/${bot.id}`}>Details</Link>
    </div>
  );
}

export default Bot;
