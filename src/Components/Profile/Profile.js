import React, { useEffect } from "react";
import { HuntNames } from "../Hunts/mockHuntData";
import Scores from "./Scores";
import Friends from "./Friends";
import settings from "../../svg/settings.svg";
import share from "../../svg/share.svg";

function profileShrink() {
  var header = document.getElementById("myHeader");
  var hideMe = document.getElementById("hideMe");
  var hideMeToo = document.getElementById("hideMeToo");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    hideMe.classList.add("hide");
    hideMeToo.classList.add("hide");
  } else {
    header.classList.remove("sticky");
    hideMe.classList.remove("hide");
    hideMeToo.classList.remove("hide");
  }
}

export default function Profile({ setWorkflowStep }) {
  window.onscroll = function() {
    profileShrink();
  };

  useEffect(() => {
    profileShrink();
  }, []);

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
    <>
      <div id="myHeader" className=" flexDisplay componentMain bufferHug ProfileInfo">
        <div className="ProfileHeading">
          <h2>
            {ProfileInfo.person.fName} {ProfileInfo.person.lName}
          </h2>
          <div id="hideMeToo">{ProfileInfo.person.username}</div>
        </div>
        <div className="ProfileBody">
        <div id="hideMe">
          <div>Joined: {ProfileInfo.person.joined}</div>
          <div>{ProfileInfo.person.country}</div></div>
          <div className="settingsBar flexDisplay">
            <img src={share} alt="share"></img>
            <img src={settings} alt="settings"></img>
          </div>
        </div>
      </div>
      <div className="content componentMain flexColumn">
        <div className="bufferHug">
          <h2>Statistics</h2>
          <Scores
            setWorkflowStep={setWorkflowStep}
            hunts={ProfileInfo.hunts}
          ></Scores>
        </div>
        <div className="bufferHug">Badges</div>
        <Friends></Friends>
        <div className="bufferHug">
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
        </div>
        <div className="bufferHug">
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
        </div>
        <div className="bufferHug">
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
        </div>
        <div className="bufferHug">
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
        </div>
        <div className="bufferHug">
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
        </div>
        <div className="bufferHug">
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
          bleh bleh bleh bleh bleh bleh bleh bleh bleh bleh
        </div>
      </div>
      <div className="bufferBottom"></div>
    </>
  );
}
