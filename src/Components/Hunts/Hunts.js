import React, { useState } from "react";
import ViewHunt from "./ViewHunt";
import { HuntNames } from "./mockHuntData";

export default function Hunts({ setWorkflowStep }) {
  const [huntType, setHuntType] = useState("Active");
  const [currentHuntView, setCurrentHuntView] = useState();
  return (
    <div className="componentMain">
      {!currentHuntView && HuntNames && (
        <>
          <h2>Scavanger Hunts</h2>
          <div className="bufferBottom friendsProfile">
            <div className="flexDisplay friendsHeader">
              <div
                className={`friendsButton ${
                  huntType == "Active" ? "selectedToggle" : ""
                }`}
                onClick={() => setHuntType("Active")}
              >
                Active
              </div>
              <div
                className={`friendsButton ${
                  huntType == "Archived" ? "selectedToggle" : ""
                }`}
                onClick={() => setHuntType("Archived")}
              >
                Archived
              </div>
            </div>
            <div>
              {huntType == "Active" &&
                HuntNames.active.map(hunt => {
                  return (
                    <div
                      onClick={() => setCurrentHuntView(hunt)}
                      key={hunt.id}
                      className="followItem"
                    >
                      <div> {hunt.name} </div>
                      <div>Current Score: {hunt.score}</div>
                      <div>End Date: {hunt.end}</div>
                    </div>
                  );
                })}
              {huntType == "Archived" &&
                HuntNames.archived.map(hunt => {
                  return (
                    <div
                      onClick={() => setCurrentHuntView(hunt)}
                      key={hunt.id}
                      className="followItem"
                    >
                      <div> {hunt.name} </div>
                      <div>Final Score: {hunt.score}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}

      {currentHuntView && (
        <ViewHunt
          currentHuntView={currentHuntView}
          setCurrentHuntView={setCurrentHuntView}
        ></ViewHunt>
      )}

      <div className="firstSecondButtonHolder">
        <div onClick={() => setWorkflowStep("Add")} className="secondaryButton">
          Create New Scanavger Hunt
        </div>
      </div>
    </div>
  );
}
