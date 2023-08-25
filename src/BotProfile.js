

const BotProfile = ({ bot, onClick }) => {
    return (
      <div className="bot">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        {onClick && <button onClick={onClick}>Add to Army</button>}
      </div>
    );
  };
  
  export default BotProfile;