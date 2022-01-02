import React from "react";
import FooterButton from "./footerButton";

export default function Footer({setWorkflowStep}) {
    
  const footerButtons = ["Home", "Add", "Search", "Hunts", "Profile"];

  return (
    <div className="footer">
      {footerButtons.map(button => {
        return (
          <FooterButton key={button}
            setWorkflowStep={setWorkflowStep}
            name={button}
          ></FooterButton>
        );
      })}
    </div>
  );

}
