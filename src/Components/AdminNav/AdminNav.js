import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div>
            <img style={{height: "50px"}} src="https://i.ibb.co/nbdcZ48/Group-1329.png" alt=""/> 
            <br/>
            <br/>
            <Link to="/registerList">Volunter register List</Link>
            <br />
            <Link to="/addEvent">Add Event</Link>
        </div>
    );
};

export default AdminNav;