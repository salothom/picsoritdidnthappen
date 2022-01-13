import React from "react";
import { HuntNames } from "../Hunts/Hunts";
import Scores from "./Scores";
import Friends from "./Friends";

export default function Profile({ setWorkflowStep }) {
  const ProfileInfo = {
    person: {
      fName: "Sarah",
      lName: "Thompson",
      username: "salothom",
      city: "Austin",
      country: "USA",
      joined: "01/01/2022"
    },
    hunts: HuntNames,
    badges: {}
  };

  return (
    <div>
      <div className="flexDisplay">
        <div>Profile</div>
        <div>Share</div>
        <div>Settings</div>
      </div>
      <div className=" flexDisplay  bufferHug ProfileInfo">
        <div className="ProfileHeading">
          <h2>
            {ProfileInfo.person.fName} {ProfileInfo.person.lName}
          </h2>
          <div>{ProfileInfo.person.username}</div>
        </div>
        <div className="ProfileBody">
          <div>Joined: {ProfileInfo.person.joined}</div>
          <div>{ProfileInfo.person.country}</div>
        </div>
      </div>
      <div className="bufferHug">
        <h2>Statistics</h2>
        <Scores
          setWorkflowStep={setWorkflowStep}
          hunts={ProfileInfo.hunts}
        ></Scores>
      </div>
      <div className="bufferHug">Badges</div>
      <Friends></Friends>
      <div className="bufferHug">bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh</div>

    </div>
  );
}
