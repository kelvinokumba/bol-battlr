import React from "react";
import BotProfile from "./BotProfile";


const BotCollection = ({ bots }) => {
    return (
        <div className="bot-collection">
            {bots.map(bot => (
                <div key={bot.id}>
                    <BotProfile bot={bot}  />
                </div>
            ))}
        </div>
    )
}


export default BotCollection;