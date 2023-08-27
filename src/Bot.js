// Bot.js
import React from 'react';
import { Link } from 'react-router-dom';

function Bot({ bot, addBotToArmy, releaseBotFromArmy, dischargeBotForever }) {
  return (
    <div className="bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
      <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
      {addBotToArmy && <button onClick={() => addBotToArmy(bot)}>Add to Army</button>}
      {releaseBotFromArmy && <button onClick={() => releaseBotFromArmy(bot)}>Release</button>}
      {dischargeBotForever && <button onClick={() => dischargeBotForever(bot)}>Discharge Forever</button>}
      <Link to={`/bot/${bot.id}`}>View Details</Link>
    </div>
  );
}

export default Bot;
