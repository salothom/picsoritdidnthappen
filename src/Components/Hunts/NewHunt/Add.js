import React, { useState } from "react";
import {  GenreOptions } from "../mockHuntData";
import HuntItem from './HuntItem'
import ScavangerHunt from './ScavangerHunt'

export default function Add() {
  const [additionType, setAdditionType] = useState("HuntItem");


  return (
    <div className=" componentMain">
      {additionType == "HuntItem" && (
      <HuntItem GenreOptions={GenreOptions}></HuntItem>
      )}
      {additionType == "ScavangerHunt" && (
        <div>
         <ScavangerHunt></ScavangerHunt>
        </div>
      )}
      {additionType == "CompletedTask" && (
        <div>
          <h1>Complete a Task</h1>
        </div>
      )}

      <div className="marginTopAuto flexDisplay">
        <div className="addButton" onClick={() => setAdditionType("HuntItem")}>
          Hunt Item
        </div>
        <div
          className="addButton"
          onClick={() => setAdditionType("ScavangerHunt")}
        >
          Scavanger Hunt
        </div>
        <div
          className="addButton"
          onClick={() => setAdditionType("CompletedTask")}
        >
          Completed Task
        </div>
      </div>
    </div>
  );
}
