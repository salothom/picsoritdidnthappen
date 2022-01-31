import React, { useState } from "react";
import { HuntNames, GenreOptions } from "../mockHuntData";
import OptionDropdown from "./OptionDropdown";
import AddTags from "./addTags";

export default function ScavangerHunt() {
  const [addStep, setAddStep] = useState(1);
  const [newHuntName, setHuntName] = useState();
  const [huntState, sethuntState] = useState();
  const [huntCity, sethuntCity] = useState();
  const [huntDescriptions, setDescriptions] = useState();

  function saveInfoStep() {
    console.log(newHuntName);
  }
  return (
    <>
      <div>
        {addStep === 1 && (
          <div>
            <h1>Create a New Scavanger Hunt</h1>
            <div>
              <div className="fullInputWidth">
                <label for="huntName">Name</label>
                <input
                  type="text"
                  id="huntName"
                  value={newHuntName}
                  name="huntName"
                  onChange={e => setHuntName(e.target.value)}
                ></input>
              </div>
              <div className="fullInputWidth">
                <label for="description">Description</label>
                <textarea
                  onChange={e => setDescriptions(e.target.value)}
                  id="description"
                  name="description"
                  value={huntDescriptions}
                ></textarea>
              </div>

              <div className="halfInputWidth">
                <div>
                  <label for="city">City</label>
                  <input
                    onChange={e => sethuntCity(e.target.value)}
                    type="text"
                    id="city"
                    value={huntCity}
                    name="city"
                  ></input>
                </div>
                <div>
                  <label for="fname">State</label>
                  <input
                    onChange={e => sethuntState(e.target.value)}
                    type="state"
                    value={huntState}
                    id="state"
                    name="state"
                  ></input>
                </div>
              </div>

              <AddTags></AddTags>
            </div>
          </div>
        )}
        {addStep === 2 && <div>
            <h2>{newHuntName}</h2>
            <div>Add items to your new scavanger hunt!</div>
        </div>}
        <div>
          {addStep > 1 && (
            <button onClick={() => setAddStep(addStep - 1)}>Previous</button>
          )}
          <button
            onClick={() => {
              saveInfoStep();
              setAddStep(addStep + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
