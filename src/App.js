import './App.css';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Forgot from "./components/forgot/forgot"
// import Teacher from './components/teacher/teacher';
// import Student from './components/student/student';
import { BrowserRouter as Routes,Route } from "react-router-dom";


import Student from './components/student/student';
import Teacher from './components/teacher/teacher';
import { useState } from 'react';


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Routes>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
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
           <Route exact path="/student">
            <Student />
          </Route>
          <Route exact path="/teacher">
            <Teacher />
          </Route> 
      </Routes> 
    </div>
  );
}

export default App;
