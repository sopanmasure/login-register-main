import React,{useState} from "react"
import "./teacherlogin.css"
import axios from "axios"
import { useHistory } from 'react-router-dom';

const Teacherlogin = ({ setLoginUser}) => {

    const history = useHistory();

    const [ user,setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Teacherlog = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
           alert(res.data.message)
           setLoginUser(res.data.user)
          history.push("/teacher")
        // })
        // if(user.email==="manali@gmail.com" && user.password==="123"){
        //     history.push("/teacherlogin")
        // }
        // else{
        //     alert("Invalid Input or you are not teacher")
        // }
    }

        )}
    // const forgot = ()=>{
    //     history.push("/forgot")
    // }

    return (
        <div className="login">
            <h1>Login as Teacher</h1>
            <input type="email"  value={user.email} name="email"  placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password"  value={user.password} name="password" placeholder="Enter your Password"onChange={handleChange} ></input>
            <div className="button" onClick={Teacherlog}>Login as Teacher</div>
            {/* <div className="forgotbutton" onClick={forgot}>Forgot Password</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
            <div className="button" onClick={()=>history.push("/teacherlogin")}>Login as Teacher</div> */}
        </div>
    )
}

export default Teacherlogin