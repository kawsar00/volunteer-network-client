import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap';
import '../Headers/Headers'
import Headers from '../Headers/Headers';
import '../Thumbnail/Thumbnail'
import Thumbnail from '../Thumbnail/Thumbnail';
import { useHistory } from "react-router-dom";

const Home = () => {
    const [items, setItems] = useState([])
    let history = useHistory();
    useEffect(() => {
        fetch('https://quiet-plateau-60035.herokuapp.com/allItems')
        .then(res => res.json())
        .then(data => {
            setItems(data)
        } )
    },[])
    
    const clickHandeler = (name,image) => {
        localStorage.setItem("image", image)
        history.push(`/register/${name}`)

    }
    return (
        <div className="mx-5 px-5">
            <Headers></Headers>
            <div className="d-flex justify-content-center my-2">
                <div>
                    <h2>I grow by helping People in need</h2>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search......"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>

            <div className="row">
                {
                    items.map(data => <div onClick={()=>clickHandeler(data.name,data.image)} key={data.key}><Thumbnail name={data.name} image={data.image} color={data.color}></Thumbnail></div> )
                }
            </div>
        </div>
    );
};

export default Home;