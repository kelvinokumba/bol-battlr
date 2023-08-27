// BotSpecs.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function BotSpecs({ addBotToArmy }) {
    // Use useParams to get the :id parameter from the URL
    const { id } = useParams();
    const [bot, setBot] = useState(null);
  
    useEffect(() => {
      // Fetch bot data based on the id parameter
      fetch(`http://localhost:8001/bots/${id}`)
        .then((response) => response.json())
        .then((data) => setBot(data))
        .catch((error) => console.error('Error fetching bot data:', error));
    }, [id]);
  
    if (!bot) {
      // Return a loading message or handle the case where bot data is not available yet
      return <div>Loading...</div>;
    }

  return (
    <div className="bot-specs">
      <h2>Bot Specs</h2>
      <div className="bot-details">
        <h3>Name: {bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
        <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
      </div>
      <div className="actions">
        <button onClick={() => addBotToArmy(bot)}>Enlist Bot</button>
        <Link to="/">Back to List</Link>
      </div>
    </div>
  );
}

export default BotSpecs;
