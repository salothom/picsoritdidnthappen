import React from "react";
import HuntItems from "./HuntItems";
import settings from "../../svg/settings.svg";
import share from "../../svg/share.svg";

export default function ViewHunt({ currentHuntView, setCurrentHuntView }) {
  return (
    <div>
      <div className="settingsBar flexDisplay">
      <img src={share} alt="share"></img>

        <img src={settings} alt="settings"></img>
      </div>
      <div className="bufferBottom">
        <h2>{currentHuntView.label}</h2>
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
