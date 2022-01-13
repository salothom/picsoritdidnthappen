import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import Footer from "./footer";
import Component from './Components/Component';


function App() {

  const [workflowStep, setWorkflowStep] = useState("Home");


  return (
    <div className="App">
      <Component setWorkflowStep={setWorkflowStep} workflowStep={workflowStep}></Component>
      <Footer setWorkflowStep={setWorkflowStep}></Footer>
    </div>
  );
}

export default App;
