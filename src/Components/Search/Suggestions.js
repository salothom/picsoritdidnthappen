import React, { useState } from "react";
import { HuntNames } from "../Hunts/mockHuntData";

export default function Suggestions() {
    const [currentHuntView, setCurrentHuntView] = useState();

  return (
    <div>
      <h1>Suggested Hunts</h1>
      <div>
        {HuntNames &&
          HuntNames.active.map(hunt => {
            return (
              <div
                onClick={() => setCurrentHuntView(hunt)}
                key={hunt.id}
                className="followItem"
              >
                <div> {hunt.name} </div>
                <div> {hunt.city}, {hunt.state} </div>
                <div>{hunt.start}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
