import React from "react"
import "./student.css"

const Student = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Student</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Student