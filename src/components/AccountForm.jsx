import React, { useState } from 'react'
import { useUsers } from './UserContext'


export default function Form () {
    const ctx = (useUsers); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
            <>
                <div style = {{maxWidth: "18rem"}}>
                    
                    <div className="form-name">
                        Name<br/>
                            <input type="input" 
                            className="form-control"
                            placeholder="Enter name" 
                            value={ctx.name} onChange={handleInputChange} /><br/>
                    </div>

                    <div className="form-email">
                        Email<br/>
                            <input type="input" 
                            className="form-control"
                            placeholder="Enter Email" 
                            value={ctx.email} onChange={handleInputChange} /><br/>
                    </div>

                    <div className="form-password">
                        Password<br/>
                            <input type="input" 
                            className="form-control"
                            placeholder="Create Password" 
                            value={ctx.email} onChange={handleInputChange} /><br/>
                    </div>

                </div>    
            </>
    )
}