import React from "react";

export default function Scores({ hunts, setWorkflowStep }) {
  let score = 0;
  let totalHunts = 0;
  let activeHuntsCount = 0;
  let archievedHuntsCount = 0;

  const activeHunts = hunts.active.map(hunt => {
    score += hunt.score;
    activeHuntsCount += 1;
    return (
      <div>
        {hunt.name} {hunt.score}
      </div>
    );
  });
  const archivedHunts = hunts.archived.map(hunt => {
    score += hunt.score;
    archievedHuntsCount += 1;
    return (
      <div>
        {hunt.name} {hunt.score}
      </div>
    );
  });
  totalHunts = archievedHuntsCount + activeHuntsCount;
  return (
    <div>
      <div>Total Score: {score}</div>
      <div>Total Scavanger Hunts Competed In: {totalHunts}</div>
      <div className="">
        <div>Active : {activeHuntsCount}</div>
        <div>Archived : {archievedHuntsCount}</div>
      </div>
      <div className="firstSecondButtonHolder">
        <div
          onClick={() => setWorkflowStep("Hunts")}
          className="secondaryButton"
        >
          View Hunts
        </div>
      </div>

      {/* <div className="arcived">{archivedHunts}</div> */}
    </div>
  );
}
