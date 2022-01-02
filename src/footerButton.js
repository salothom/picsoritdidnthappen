import React from 'react'

export default function FooterButton({name, setWorkflowStep}) {

   

    return (
        <div className="twentyWidth">
            <div className="footerButton" onClick={()=>setWorkflowStep(name)}>{name}</div>
        </div>
    )
}
