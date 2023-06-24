import React from 'react'
import app from './config'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
const Auth = () => {
    const [User, setUser] = useState("")
    const auth = getAuth(app);
    const loggedIn = ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
           setUser(user.uid);
              // ...
            } else {
           setUser("Logged Out")
            }
          });
    }
    useEffect(() => {
     loggedIn()
    }, [])
    

    const signup = ()=>{
        createUserWithEmailAndPassword(auth, "johndoe@gmail.com", "123456")
        .then((usercredential)=>{
            setUser(usercredential.user.uid)
        })
        .catch((err)=>{
            console.log(err)
        })
       
    }
    const signin = ()=>{
        signInWithEmailAndPassword(auth, "johndoe@gmail.com","123456")
        .then((usercredential)=>{
            setUser(usercredential.user.uid)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const signout = ()=>{
        signOut(auth)
        .then((user)=>{
            setUser("Logged out")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='container'>
        <h3>User:{User? User : "no user"}</h3>
        <button onClick={signup} className='btn btn-dark' >Signup</button>
        <button onClick={signin} className=' ms-3 btn btn-success' >Signin</button>
        <button onClick={signout} className=' ms-3 btn btn-danger' >Sigout</button>
    </div>
  )
}

export default Auth