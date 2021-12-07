import React from "react";
import axios from "axios";
// export class Forgot extends component {

//     handlesubmit = e => {
//         e.preventDefault();
 
//     };
// }

const handlesubmit= e => {
//    e.preventDefault();
const data ={
    email:""
};
axios.post('forgot',data).then(
    res=>{
        console.log(res)
    }
).catch(
    err=>{
        console.log(err);
    }
)
        };
const Forgot=()=>{
        return (
            <form>
                <h3>Forgot Password</h3>
                <div className="form-group">
                    <lable>Email</lable>
                    <input type="email" className="form-control" placeholder="Enter your email"
                        onChange={e=> e.target.value}></input>
                </div>
                <button className="btn" onClick={handlesubmit()}>Submit</button>
            </form>
        )
        
};
export default Forgot