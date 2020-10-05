import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory } from "react-router-dom";


const Headers = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext)
    let history = useHistory();

    const adminPage = () => {
        history.push('/admin')
    }
    return (
        <div>
            <>
                <Navbar >
                    <Navbar.Brand to="/"><img style={{height:'50px'}} src="https://i.ibb.co/nbdcZ48/Group-1329.png" alt=""/></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>  
                    {
                        loggedInUser.email ? <h4>{loggedInUser.name}</h4> 
                        : <Button className="mx-2 px-5" variant="primary">register</Button>
                    }                       
                    <Button onClick={adminPage} className="mx-2 px-5" variant="dark">Admin</Button>{' '}            
                </Navbar>
            </>
        </div>
    );
};

export default Headers;