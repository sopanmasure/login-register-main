import './App.css';
// import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Forgot from "./components/forgot/forgot"
// import Teacher from './components/teacher/teacher';
// import Student from './components/student/student';
import Student from './components/student/student';
import Teacher from './components/teacher/teacher';
import Teacherlogin from './components/teacherlogin/teacherlogin';
import { BrowserRouter as Routes,Route } from "react-router-dom";


import { useState } from 'react';


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Routes>
          <Route exact path="/student">
            {
              user && user._id ? <Student setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route exact path="/teacher">
            {
              user && user._id ? <Teacher setLoginUser={setLoginUser} /> : <Teacherlogin setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/forgot">
            <Forgot />
          </Route>
          <Route path="/teacherlogin">
            <Teacherlogin setLoginUser={setLoginUser}/>
          </Route>
           {/* <Route exact path="/student">
            <Student />
          </Route> */}
          {/* <Route exact path="/teacher"> */}
            {/* <Teacherlogin setLoginUser={setLoginUser}/>
            <div className="Loginteacher">
            <button onclick={window.alert['validate']}>Login as Teacher</button>
        </div> */}
        {/* <Teacherlogin/>
          </Route>  */}
      </Routes> 
    </div>
  );
}

export default App;
