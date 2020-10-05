import React, { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../Config/Config';
import { useHistory, useLocation } from 'react-router-dom';


const LogIn = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();  
    let { from } = location.state || { from: { pathname: "/" } };

    const buttonHandeller = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName, photoURL, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName, 
                email: email,
                photo: photoURL
              };
              setLoggedInUser(signedInUser)
              history.replace(from);

          }).catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={buttonHandeller}>Login With Google</button>
        </div>
    );
};

export default LogIn;