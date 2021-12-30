import React from "react";
import FooterButton from './footerButton';

export default function Footer() {
    const footerButtons = ['Home','Add','Search','Hunts','ME']
  return (
    <div className="footer">
    {footerButtons.map((button)=>{
        return <FooterButton name={button}></FooterButton>
    })}
    
    </div>
  );
}
