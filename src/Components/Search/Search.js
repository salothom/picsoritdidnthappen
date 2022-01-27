import React from "react";
import Suggestions from './Suggestions'

export default function Search() {
  return (
    <div className="componentMain">
      <h1>Discover More</h1>
      <div>
        <div>
          <div className="discoverMoreSearch flexDisplay">
            <input type="text" id="Search" name="Search"></input>
            <button className="primaryButton">Search</button>
          </div>
          <div>
            Find scavanger hunts by name, city, or by a code given to you by the
            organizer
          </div>
        </div>
      </div>
      <Suggestions></Suggestions>
      <div className="bufferBottom"></div>

    </div>
  );
}
