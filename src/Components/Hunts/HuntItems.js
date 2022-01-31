import React, { useState } from "react";
import { fakeHuntItems } from "./mockHuntData";
import CompleteTask from "./CompleteTask";

export default function HuntItems({ currentHuntView }) {
  const [selectedHuntItem, setSelectedHuntItem] = useState();
  function updateCompleteTask(Update) {
    setSelectedHuntItem("");
  }

  function inputChangedHandler(item) {
    setSelectedHuntItem(item);
  }
  let myPoints = 0;
  let totalPoints = 0;

  return (
    <>
      <div className="bufferBottom">
        {fakeHuntItems.map(item => {
          totalPoints += item.points;
          if (item.completed) {
            myPoints += item.points;
          }
          return (
            <div
              onClick={() => inputChangedHandler(item)}
              key={item.label}
              className="huntItems"
            >
              <div>
                <input
                  //   onChange={() => inputChangedHandler(item)}
                  type="checkbox"
                  id="scales"
                  name="scales"
                  checked={item.completed ? "checked" : ""}
                ></input>
              </div>
              <div>{item.label}</div>
              <div>{item.points}</div>
            </div>
          );
        })}
      </div>
      <div>
        Score is {myPoints}/{totalPoints}
      </div>
      {selectedHuntItem && (
        <CompleteTask
          currentHuntView={currentHuntView}
          selectedHuntItem={selectedHuntItem}
          updateCompleteTask={updateCompleteTask}
        ></CompleteTask>
      )}
    </>
  );
}
