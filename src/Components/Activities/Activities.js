import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddEvent from '../AddEvent/AddEvent';
import AdminNav from '../AdminNav/AdminNav';
import RegisterList from '../RegisterList/RegisterList';

const Activities = () => {
    return (
        <div className="m-5">
            <Router>
                <div className='d-flex'>
                    <AdminNav></AdminNav>
                    
                    <Switch>
                        <Route path="/addEvent">
                            <AddEvent></AddEvent>
                        </Route>
                        <Route path="/registerList">
                            <RegisterList></RegisterList>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Activities;