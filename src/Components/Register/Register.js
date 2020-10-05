import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './register.css';
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from '../../App';

const Register = () => {
    const image = localStorage.getItem("image");
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)
    const [user, setUser] = useState({})
    let history = useHistory();
    let { select } = useParams();

    const submitHandler = (e) => {
        const signedInUser = {...user} 
        signedInUser.image = image     
        signedInUser.name = loggedInUser.name
        signedInUser.email = loggedInUser.email
        signedInUser.choise = select


        fetch('https://quiet-plateau-60035.herokuapp.com/userDatas',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(signedInUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedCount > 0){
                localStorage.removeItem("image")
                history.push(`/userDashBoard/${loggedInUser.email}`);
            }            
        })        
        e.preventDefault();        
    } 
    
    const dateHandler = (e) => {
        const update = {...user}
        update.date = e.target.value;
        setUser(update);
    }
    const descriptionHandler = (e) => {
        const update = {...user}
        update.description = e.target.value;
        setUser(update);
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className='register px-4 py-2' style={{ width: '1100px' }}>
                <h1 className="mb-5">Register as a volunteer</h1>
                <Form>
                    <Form.Group as={Row} controlId="name">
                        <Form.Label column sm="2">
                            Full Name
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={loggedInUser.name} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="email">
                        <Form.Label column sm="2">
                            User name or email
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={loggedInUser.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="description">
                        <Form.Label column sm="2">
                            Description
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={descriptionHandler} type="text" placeholder="Description" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="date">
                        <Form.Label column sm="2">
                            Date
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={dateHandler} type="date" placeholder="Date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="choice">
                        <Form.Label column sm="2">
                            Your Choice
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={select} />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" onClick={submitHandler} className="float-right" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;