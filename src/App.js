import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Nomatch from './Components/NoMatch/Nomatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Activities from './Components/Activities/Activities';
import LogIn from './Components/LogIn/LogIn';
import { createContext } from 'react';
import UserDashBoard from './Components/UserDashBoard/UserDashBoard';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/userDashBoard/:email">
            <UserDashBoard></UserDashBoard>
          </PrivateRoute>
          <PrivateRoute path="/register/:select">
            <Register></Register>
          </PrivateRoute>
          <Route path="/admin">
            <Activities></Activities>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}
export default App;
