import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from "../firebase/firebase.config"
import axios from 'axios';
export const AuthContext = createContext(null)


const auth = getAuth(app)


const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    const update = (name,photo) =>{
        
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

    const handleGoogle = () =>{
        return signInWithPopup(auth,provider)
 }




    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser)
            // get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(data=>{
                    console.log(data.data.token)
                    localStorage.setItem('access token',data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access token')
            }
            // setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])




    const authInfo = {
        user,loading,createUser,logIn,logOut,update,handleGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;