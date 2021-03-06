import React from "react";
import Hunts from "./Hunts/Hunts";
import Home from './Home';
import Profile from "./Profile/Profile";
import Search from './Search/Search';
import Add from './Hunts/NewHunt/Add';


export default function Component({ workflowStep,setWorkflowStep }) {
  return (
    <div className="componentTall">
      {workflowStep == "Hunts" && <Hunts setWorkflowStep={setWorkflowStep}></Hunts>}
      {workflowStep == "Profile" && <Profile setWorkflowStep={setWorkflowStep}></Profile>}
      {workflowStep == "Home" && <Home></Home>}
      {workflowStep == "Add" && <Add></Add>}
      {workflowStep == "Search" && <Search></Search>}
    </div>
  );
}
