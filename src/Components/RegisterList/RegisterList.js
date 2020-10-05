import React, { useEffect, useState } from 'react';
import './RegisterList.css'

const RegisterList = () => {
    const [results, setResult] = useState([])
    const refresh = () =>{
        fetch('https://quiet-plateau-60035.herokuapp.com/allVolunteerList')
        .then(response => response.json())
        .then(data =>{
            setResult(data)
        })
    }
    useEffect(()=>{
        refresh()        
    },[])
    const delethandeler = (id) => {
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
        <div className="ml-3">
            <h3>Register List</h3>
            <div className="registerList">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Volentier List</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map(result => <tr key={result._id}>                                                            
                                <td>{result.name}</td>
                                <td>{result.email}</td>
                                <td>{result.date}</td>
                                <td>{result.choise}</td>
                                <td onClick={()=>delethandeler(result._id)}><img style={{backgroundColor:'red', height: '30px'}} 
                                src="https://i.ibb.co/9n1F6hZ/trash-2-9.png" alt=""/></td>
                            </tr> )
                        }                       
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default RegisterList;