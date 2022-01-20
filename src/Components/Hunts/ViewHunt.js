import React from "react";
import HuntItems from "./HuntItems";

export default function ViewHunt({ currentHuntView, setCurrentHuntView }) {
  return (
    <div>
      <div className="bufferBottom">
        <h2>{currentHuntView.name}</h2>
        <div>{currentHuntView.description}</div>
      </div>
      <HuntItems currentHuntView={currentHuntView}></HuntItems>
      <div className="firstSecondButtonHolder">
        <div onClick={() => setCurrentHuntView()} className="secondaryButton">
          Back to All Hunts
        </div>
      </div>
    </div>
  );
}
