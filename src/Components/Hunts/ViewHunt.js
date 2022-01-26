import React from "react";
import HuntItems from "./HuntItems";
import settings from "../../svg/settings.svg";

export default function ViewHunt({ currentHuntView, setCurrentHuntView }) {
  return (
    <div>
      <div className="settingsBar flexDisplay">
        <img src={settings} alt="Kiwi standing on oval"></img>
      </div>
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
