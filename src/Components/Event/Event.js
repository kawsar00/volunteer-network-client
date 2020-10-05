import React from 'react';
import { Button } from 'react-bootstrap';
import './event.css'

const Event = (props) => {
    const {image, date, choise, id, cancelHandeler} = props
    
    return (
        <div>
            <div className="event">
                <div className="d-flex">
                    <img style={{ height: "100px" }} src={image} alt="" />
                    <div className="ml-3">
                    <h6>{choise}</h6>
                        <h6>{date}</h6>                        
                        <Button onClick={() => cancelHandeler(id)} style={{ marginLeft: "180px" }} variant="secondary" className="float-right">cancel</Button>{' '}
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Event;