import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to handle navigation

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
      <p>Created At: {new Date(bot.created_at).toLocaleString()}</p> // Format and display the created_at date
      <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p> // Format and display the updated_at date

      {/* Render buttons conditionally based on the passed props */}
      {addBotToArmy && <button onClick={() => addBotToArmy(bot)}>Add to Army</button>}
      {releaseBotFromArmy && <button onClick={() => releaseBotFromArmy(bot)}>Release</button>}
      {dischargeBotForever && <button onClick={() => dischargeBotForever(bot)}>Discharge Forever</button>}

      {/* Create a Link to navigate to the bot's details page */}
      <Link to={`/bot/${bot.id}`}>View Details</Link>
    </div>
  );
}

export default Bot;
