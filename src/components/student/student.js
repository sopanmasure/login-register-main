import React from "react"
import "./student.css"
// import Login from "../login/login"
import { useHistory } from 'react-router-dom';

const Student = () => {
    const history = useHistory();
    return (
        
        <div className="homepage">
            <h1>Hello Studnet</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>
    )
}

export default Student