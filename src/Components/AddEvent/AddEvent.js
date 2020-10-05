import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const AddEvent = () => {
    let history = useHistory();
    const [event, setEvent] = useState({})
    const submitHandler = (e) => {
        const newEvent = {...event} 
        newEvent.image = "https://i.ibb.co/B42GfJf/library-Books.png" 
        newEvent.color = "orange"

        fetch('https://quiet-plateau-60035.herokuapp.com/addEvent',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                history.push(`/`);
            }         
        })        
        e.preventDefault();        
    } 

    const titleHandler = (e) => {
        const data = {...event}
        data.name = e.target.value;
        setEvent(data)
    }

    return (
        <div className="ml-3">
            <h3 className="ml-5">Add Event</h3>
            <div className="registerList">
            <div className="d-flex justify-content-center mt-5">
            <div className='register px-4 py-2' style={{ width: '1100px' }}>                
                <Form>                    
                    
                    <Form.Group as={Row} controlId="Title">
                        <Form.Label column sm="2">
                            Title
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={titleHandler} type="text" placeholder="Title" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="date">
                        <Form.Label column sm="2">
                            Date
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control type="date" placeholder="Date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Description">
                        <Form.Label column sm="2">
                            Description
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Description" />
                        </Col>
                    </Form.Group>
                    
                    <Button variant="primary" onClick={submitHandler} className="float-right" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
            </div>
        </div>
    );
};

export default AddEvent;