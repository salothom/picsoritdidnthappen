import React from "react";

export default function Hunts() {
  const HuntNames = [
    {
      name: "SummerSpash wow Zone",
      id: "1a1a",
      active: true,
      start: "05/05/2022",
      end: "06/06/2022",
      score: 1726
    },
    {
      name: "Wood Run Fun Party",
      id: "2b2b",
      active: true,
      start: "05/05/2022",
      end: "06/06/2022",
      score: 453
    },
    {
      name: "Cool Time Fun Game",
      id: "3c3c",
      active: false,
      start: "05/07/2021",
      end: "06/06/2021",
      score: 343
    },
    {
      name: "Tasty nice good Game",
      id: "3c3c",
      active: true,
      start: "05/07/2021",
      end: "06/06/2021",
      score: 837
    }
  ];
  return (
    <div>
      <h1 className="headingMain">Active Scavenger Hunts</h1>
      {HuntNames.map(hunt => {
        if (hunt.active) {
          return (
            <div className="huntButton">
              <div>{hunt.name} </div>
              <div> Current score: {hunt.score}</div>
            </div>
          );
        }
      })}
            <h1 className="headingMain">Archived Scavenger Hunts</h1>
            {HuntNames.map(hunt => {
        if (!hunt.active) {
          return (
            <div className="huntButton">
              <div>{hunt.name} </div>
              <div> Final score: {hunt.score}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
