import React from "react";
import { HuntNames, GenreOptions } from "../mockHuntData";
import OptionDropdown from "./OptionDropdown";
import AddTags from "./addTags";

export default function HuntItem() {
  return (
    <>
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
            <label for="description">Genre Options</label>
            <OptionDropdown GenreOptions={GenreOptions}></OptionDropdown>
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
          <div className="halfInputWidth">
            <div>
              <label for="pointValue">Point Value</label>
              <input type="text" id="pointValue" name="pointValue"></input>
            </div>
            <div>
              <label for="pointValue">Point Value</label>
              <input type="text" id="pointValue" name="pointValue"></input>
            </div>
          </div>
          <div className="fullInputWidth">
            <label for="pointValue">Assign to a Hunt</label>
            <OptionDropdown GenreOptions={HuntNames.active}></OptionDropdown>
          </div>
          <AddTags></AddTags>
        </div>
      </div>
    </>
  );
}
