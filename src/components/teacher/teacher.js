import React from "react"
import "./teacher.css"
import { useHistory } from 'react-router-dom';

const Teacher = () => {
    const history = useHistory();
    return (
        
        <div className="homepage">
            <h1>Hello Teacher</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>
    )
}


export default Teacher