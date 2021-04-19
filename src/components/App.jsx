import React from "react";
import EmojiMain from "./EmojiMain";
import emojipedia from "../emojipedia";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((card) => {
          return (
            <EmojiMain
              key={card.id}
              name={card.name}
              emoji={card.emoji}
              meaning={card.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
