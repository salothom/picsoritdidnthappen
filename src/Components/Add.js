import React, { useState } from "react";

export default function Add() {
  const [additionType, setAdditionType] = useState("HuntItem");

  return (
    <div className="addComponent">
      {additionType == "HuntItem" && (
        <div>
          <h1>Add a New Hunt Item</h1>
          <div>
            <div className="fullInputWidth">
              <label for="huntItemName">Name</label>
              <input type="text" id="huntItemName" name="huntItemName"></input>
            </div>
            <div className="fullInputWidth">
              <label for="description">Description</label>
              <textarea id="description" name="description"></textarea>
            </div>
            <div className="fullInputWidth">
              <label for="genre">Genre</label>
              <input type="text" id="genre" name="genre"></input>
            </div>

            <div className="halfInputWidth">
              <div>
                <label for="city">City</label>
                <input type="text" id="city" name="city"></input>
              </div>
              <div>
                <label for="fname">State</label>
                <input type="state" id="state" name="state"></input>
              </div>
            </div>
            <div className="fullInputWidth">
              <label for="pointValue">Point Value</label>
              <input type="text" id="pointValue" name="pointValue"></input>
            </div>
            <button>Add Hunt</button>
          </div>
        </div>
      )}
      {additionType == "ScavangerHunt" && (
        <div>
          <h1>Create Scavanger Hunt</h1>
        </div>
      )}
      {additionType == "CompletedTask" && (
        <div>
          <h1>Complete a Task</h1>
        </div>
      )}

      <div className="addButtonSection">
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
