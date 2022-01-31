import React from "react";
import CalendarInput from "./CalendarInput";

export default function CompleteTask({
  updateCompleteTask,
  selectedHuntItem,
  currentHuntView
}) {
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span onClick={() => updateCompleteTask(false)} class="close">
          &times;
        </span>
        <h2>Complete Scavanger Hunt Task</h2>
        <div className="bufferBottom">
          <div className="fullInputWidth">
            <label for="huntItemName">Scavanger Hunt</label>
            <input
              type="text"
              id="huntItemName"
              value={currentHuntView.label}
              name="huntItemName"
            ></input>
          </div>
          <div className="fullInputWidth">
            <label for="description">Scavanger Hunt Item</label>
            <input
              id="description"
              value={selectedHuntItem.label}
              name="description"
            ></input>
          </div>
          <div className="halfInputWidth">
            <CalendarInput></CalendarInput>
          </div>
        </div>

        <div className="firstSecondButtonHolder">
          <div
            onClick={() => updateCompleteTask(false)}
            className="primaryButton"
          >
            Cancel
          </div>
          <div className="secondaryButton">Complete Item</div>
        </div>
      </div>
    </div>
  );
}
