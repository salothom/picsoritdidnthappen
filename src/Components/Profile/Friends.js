import React, { useState } from "react";

export default function Friends() {
  const [friendType, setFriendType] = useState("following");

  const friends = {
    following: [
      { name: "Ben Sullivan", username: "benebeats", totalscore: 32345 },
      { name: "Maggie Wolff", username: "TheFullMoon", totalscore: 12345 }
    ],
    followers: [
      { name: "Ben Sullivan", username: "benebeats", totalscore: 32345 },
      { name: "Maggie Wolff", username: "TheFullMoon", totalscore: 12345 },
      { name: "Stranger Man", username: "creepinOnU", totalscore: 666 }
    ]
  };
  return (
    <div className="bufferHug">
      <h2>Friends</h2>
      <div className="friendsProfile">
        <div className="flexDisplay friendsHeader">
          <div
            className={`friendsButton ${
              friendType == "following" ? "selectedToggle" : ""
            }`}
            onClick={() => setFriendType("following")}
          >
            Following
          </div>
          <div
            className={`friendsButton ${
              friendType == "followers" ? "selectedToggle" : ""
            }`}
            onClick={() => setFriendType("followers")}
          >
            Followers
          </div>
        </div>
        <div>
          {friendType == "following" &&
            friends.following.map(follow => {
              return (
                <div key={follow.username} className="followItem">
                  {follow.name}
                </div>
              );
            })}
          {friendType == "followers" &&
            friends.followers.map(follow => {
              return (
                <div key={follow.username} className="followItem">
                  {follow.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
