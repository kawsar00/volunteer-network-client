import React from 'react';
import './thumbnail.css'

const Thumbnail = ({ name,image,color }) => {   

    return (
        <div className="mx-3 thumbnail" style={{width: "250px"}}>
            <img style={{width: "250px"}} src={image} alt=""/>
            <div className="caption" style={{backgroundColor: color}}>
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Thumbnail;
