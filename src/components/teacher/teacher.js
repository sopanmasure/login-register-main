import React from "react"
import "./teacher.css"

const Teacher = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Teacher</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Teacher