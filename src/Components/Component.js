import React from "react";
import Hunts from "./Hunts/Hunts";
import Home from './Home';
import Profile from "./Profile";
import Search from './Search';
import Add from './Add';


export default function Component({ workflowStep }) {
  return (
    <div className="componentMain">
      {workflowStep == "Hunts" && <Hunts></Hunts>}
      {workflowStep == "Profile" && <Profile></Profile>}
      {workflowStep == "Home" && <Home></Home>}
      {workflowStep == "Add" && <Add></Add>}
      {workflowStep == "Search" && <Search></Search>}
    </div>
  );
}
