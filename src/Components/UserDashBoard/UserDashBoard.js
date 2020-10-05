import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Event from '../Event/Event';
import Headers from '../Headers/Headers';
import './dashboard.css'

const UserDashBoard = () => {
    const [choices, setChoices] = useState()
    const {email} = useParams();

    const refresh = () => {
        fetch(`https://quiet-plateau-60035.herokuapp.com/choiceCollection/${email}`)
        .then(res => res.json())
        .then(data =>{
            setChoices(data);            
        })
    }
    useEffect(()=>{
        if(email){
            refresh()
        }
    },[])
    const cancelHandeler = (id) => {
        fetch(`https://quiet-plateau-60035.herokuapp.com/delete/${id}`,{
            method: 'DELETE'            
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                refresh()
            }           
        })
    }
    return (
        <div>
            <Headers></Headers>
            <div className="row container">
                {
                    choices && choices.map(choice => <Event 
                        key={choice._id} 
                        choise={choice.choise} 
                        date={choice.date}
                        image={choice.image}    
                        id={choice._id}        
                        cancelHandeler={cancelHandeler}            
                        ></Event>  )
                }            
                
            </div>
        </div>
    );
};

export default UserDashBoard;